from environs import Env
from fastapi import FastAPI, APIRouter, Depends
from infrastructure.database.setup import create_engine, create_session_pool
from infrastructure.database.repo.gpt_models import GPTModelRepo
from infrastructure.database.repo.languages import LanguageRepo
from infrastructure.database.repo.requests import RequestRepo

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


@prefix_router.get("/user_info")
async def get_user_info(request_repo: RequestRepo = Depends(get_request_repo)):
    return await request_repo.users.get_user_info()

app.include_router(prefix_router)
