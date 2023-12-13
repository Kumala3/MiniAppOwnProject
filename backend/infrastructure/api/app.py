from environs import Env
from fastapi import FastAPI, APIRouter, Depends, HTTPException
from infrastructure.database.setup import create_engine, create_session_pool
from infrastructure.database.repo.requests import RequestRepo
from infrastructure.api.types import UserUpdateData

from config import DbConfig

app = FastAPI()
prefix_router = APIRouter(prefix="/api")

env = Env()
env.read_env()
db_config = DbConfig.from_env(env)

engine = create_engine(db_config)
session_pool = create_session_pool(engine)


async def get_request_repo() -> RequestRepo:
    async with session_pool() as session:
        yield RequestRepo(session)


@prefix_router.get("/models")
async def get_models(request_repo: RequestRepo = Depends(get_request_repo)):
    return await request_repo.gpt_models.get_all_gpt_models()


@prefix_router.get("/languages")
async def get_languages(request_repo: RequestRepo = Depends(get_request_repo)):
    return await request_repo.languages.get_all_languages()


@prefix_router.get("/users/{user_id}")
async def get_user_info(user_id: int, request_repo: RequestRepo = Depends(get_request_repo)):
    return await request_repo.users.get_user_by_id(user_id)


@prefix_router.patch("/users")
async def update_user_info(update_user_data: UserUpdateData, request_repo: RequestRepo = Depends(get_request_repo)):
    if update_user_data.window_limit:
        if not update_user_data.model_id:
            return HTTPException(status_code=400, detail="model_id is required for window_limit update")

        await request_repo.users.upsert_window_limit(
            update_user_data.user_id,
            update_user_data.model_id,
            update_user_data.window_limit
        )
        await request_repo.session.commit()
        return {"ok": True, "message": "window_limit was updated"}

    await request_repo.users.update_user_info(
        **update_user_data.model_dump(exclude_none=True)
    )
    await request_repo.session.commit()
    return {"ok": True, "message": "user info was updated"}

app.include_router(prefix_router)
