import asyncio

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from infrastructure.database.models import User
from infrastructure.database.repo.base import BaseRepo
from infrastructure.database.setup import create_engine, create_session_pool
from config import DbConfig
from environs import Env


class UserRepo(BaseRepo):
    async def get_all_user_info(self, offset=None, limit=None) -> list[dict]:
        stmt = select(User.user_id, User.username,
                      User.full_name, User.created_at,
                      User.user_profile, User.response_profile)
        result = await self.session.execute(stmt)
        return result.mappings().all()
