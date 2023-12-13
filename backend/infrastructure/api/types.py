from pydantic import BaseModel
from typing import Optional


class UserUpdateData(BaseModel):
    user_id: int
    language_id: Optional[int] = None
    model_id: Optional[int] = None
    auto_transcription: Optional[bool] = None
    user_profile: Optional[str] = None
    response_profile: Optional[str] = None
    auto_speech: Optional[bool] = None
    single_message: Optional[bool] = None
    window_limit: Optional[int] = None
