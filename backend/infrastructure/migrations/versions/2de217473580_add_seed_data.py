"""add seed data

Revision ID: 2de217473580
Revises: dfa4aa4f8db5
Create Date: 2023-12-07 21:09:25.694010

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = '2de217473580'
down_revision: Union[str, None] = 'dfa4aa4f8db5'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

gpt_models = [
    {
        "model_name": "GPT-3",
        "verbose_name": "GPT-3",
        "max_context_limit": 8000
    },
    {
        "model_name": "GPT-3.5",
        "verbose_name": "GPT-3.5",
        "max_context_limit": 16000
    },
    {
        "model_name": "GPT-4",
        "verbose_name": "GPT-4",
        "max_context_limit": 32000
    },
]


def upgrade() -> None:
    conn = op.get_bind()

    gpt_models_table = sa.table(
        "gpt_models",
        sa.column("model_name", sa.String),
        sa.column("verbose_name", sa.String),
        sa.column("max_context_limit", sa.Integer),
    )

    conn.execute(
        gpt_models_table.insert().values(gpt_models)
    )


def downgrade() -> None:
    conn = op.get_bind()

    conn.execute(
        sa.text(
            "TRUNCATE TABLE gpt_models"
        )
    )
