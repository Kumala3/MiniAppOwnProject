from sqlalchemy import select

from infrastructure.database.models import GPTModel, User
from infrastructure.database.repo.base import BaseRepo


class GPTModelRepo(BaseRepo):
    async def get_all_gpt_models(self, offset=None, limit=None) -> list[dict]:
        stmt = select(GPTModel.model_id,
                      GPTModel.model_name,
                      GPTModel.verbose_name,
                      GPTModel.max_context_limit)
        result = await self.session.execute(stmt)
        return result.mappings().all()
