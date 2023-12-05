import datetime

from sqlalchemy.dialects.postgresql import TIMESTAMP
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.sql.functions import func
from typing_extensions import Annotated

int_pk = Annotated[int, mapped_column(primary_key=True)]


class Base(DeclarativeBase):
    pass


class TimestampMixin:
    created_at: Mapped[datetime] = mapped_column(TIMESTAMP, server_default=func.now())