from sqlalchemy import select

from infrastructure.database.models import User
from infrastructure.database.repo.base import BaseRepo


class UserRepo(BaseRepo):
    async def get_user_info(self, offset=None, limit=None) -> list[dict]:
        stmt = select(User.user_id, User.username,
                      User.full_name, User.created_at,
                      User.user_profile, User.response_profile,
                      User.auto_speech, User.single_message,
                      User.auto_transcription)
        result = await self.session.execute(stmt)
        return result.mappings().all()
