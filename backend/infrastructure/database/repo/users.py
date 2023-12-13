from sqlalchemy import select, and_, func, update
from sqlalchemy.dialects.postgresql import insert

from infrastructure.database.models import User, UserContextLimit
from infrastructure.database.repo.base import BaseRepo


class UserRepo(BaseRepo):

    async def get_user_by_id(self, user_id: int) -> dict:
        stmt = (
            select(
                User.model_id,
                User.language_id,
                User.auto_transcription,
                User.auto_speech,
                User.single_message,
                User.user_profile,
                User.response_profile,
                func.coalesce(UserContextLimit.window_limit, 500).label("window_limit")).outerjoin(
                UserContextLimit, and_(UserContextLimit.user_id == User.user_id,
                                       UserContextLimit.model_id == User.model_id,
                                       )).where(User.user_id == user_id)
                )

        result = await self.session.execute(stmt)
        return result.mappings().all()

        return result.mappings().first()
