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