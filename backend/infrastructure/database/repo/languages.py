from sqlalchemy import select

from infrastructure.database.models import Language
from infrastructure.database.repo.base import BaseRepo


class LanguageRepo(BaseRepo):
    async def get_all_languages(self, offset=None, limit=None) -> list[dict]:
        stmt = select(Language.language_code,
                      Language.local_name,
                      Language.language_name)
        result = await self.session.execute(stmt)
        return result.mappings().all()
