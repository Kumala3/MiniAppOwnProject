import asyncio

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from infrastructure.database.models import Language
from infrastructure.database.repo.base import BaseRepo
from infrastructure.database.setup import create_engine, create_session_pool
from config import DbConfig
from environs import Env


class LanguageRepo(BaseRepo):
    async def get_all_languages(self, offset=None, limit=None) -> list[dict]:
        stmt = select(Language.language_code, Language.local_name,
                      Language.language_name)
        result = await self.session.execute(stmt)
        return result.mappings().all()
