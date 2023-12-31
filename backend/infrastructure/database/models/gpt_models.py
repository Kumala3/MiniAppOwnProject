from typing import Optional

from sqlalchemy import BIGINT, VARCHAR, BOOLEAN, INTEGER, ForeignKey, false
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, TimestampMixin, int_pk


class GPTModel(Base, TimestampMixin):
    __tablename__ = 'gpt_models'

    model_id: Mapped[int_pk]
    model_name: Mapped[str] = mapped_column(VARCHAR(32), unique=True)
    verbose_name: Mapped[Optional[str]] = mapped_column(VARCHAR(32))
    max_context_limit: Mapped[int] = mapped_column(INTEGER)


class UserContextLimit(Base, TimestampMixin):
    __tablename__ = 'user_model_limit'

    user_id: Mapped[int_pk] = mapped_column(ForeignKey('users.user_id'), primary_key=True)
    model_id: Mapped[int_pk] = mapped_column(ForeignKey('gpt_models.model_id'), primary_key=True)
    window_limit: Mapped[int] = mapped_column(INTEGER)
