import asyncio

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from infrastructure.database.models import GPTModel, User
from infrastructure.database.repo.base import BaseRepo
from infrastructure.database.setup import create_engine, create_session_pool
from config import DbConfig
from environs import Env


class GPTModelRepo(BaseRepo):
    async def get_all_gpt_models(self, offset=None, limit=None) -> list[dict]:
        stmt = select(GPTModel.model_name, GPTModel.model_id,
                      GPTModel.verbose_name, GPTModel.max_context_limit)
        result = await self.session.execute(stmt)
        return result.mappings().all()