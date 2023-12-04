from typing import Optional

from sqlalchemy import BIGINT, VARCHAR, BOOLEAN, ForeignKey, false
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, TimestampMixin


class User(Base, TimestampMixin):
    __tablename__ = 'users'

    user_id: Mapped[int] = mapped_column(BIGINT, primary_key=True, autoincrement=False)
    full_name: Mapped[str] = mapped_column(VARCHAR(64))
    username: Mapped[Optional[str]] = mapped_column(VARCHAR(64), unique=True)
    language_id: Mapped[int] = mapped_column(ForeignKey('languages.language_id'))
    model_id: Mapped[int] = mapped_column(ForeignKey('models.model_id'))
    auto_transcription: Mapped[bool] = mapped_column(BOOLEAN, default=false())
    auto_speech: Mapped[bool] = mapped_column(BOOLEAN, default=false())
    single_message: Mapped[bool] = mapped_column(BOOLEAN, default=false())
    user_profile: Mapped[Optional[str]] = mapped_column(VARCHAR(1500))
    response_profile: Mapped[Optional[str]] = mapped_column(VARCHAR(1500))
