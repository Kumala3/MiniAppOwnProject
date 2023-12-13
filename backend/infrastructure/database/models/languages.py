from typing import Optional

from sqlalchemy import VARCHAR
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base, TimestampMixin, int_pk


class Language(Base, TimestampMixin):
    __tablename__ = 'languages'

    language_id: Mapped[int_pk]
    language_code: Mapped[str] = mapped_column(VARCHAR(7), unique=True)
    local_name: Mapped[str] = mapped_column(VARCHAR(64))
    language_name: Mapped[str] = mapped_column(VARCHAR(64))
