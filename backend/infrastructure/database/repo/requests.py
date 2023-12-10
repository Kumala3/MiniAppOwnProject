from dataclasses import dataclass

from sqlalchemy.ext.asyncio import AsyncSession

from infrastructure.database.repo.languages import LanguageRepo
from infrastructure.database.repo.gpt_models import GPTModelRepo
from infrastructure.database.repo.users import UserRepo


@dataclass
class RequestRepo:

    session: AsyncSession

    @property
    def users(self) -> UserRepo:
        return UserRepo(self.session)

    @property
    def languages(self) -> LanguageRepo:
        return LanguageRepo(self.session)

    @property
    def gpt_models(self) -> GPTModelRepo:
        return GPTModelRepo(self.session)


