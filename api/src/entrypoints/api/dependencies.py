from functools import lru_cache

from src.entrypoints.api.config import Settings


@lru_cache
def get_settings() -> Settings:
    return Settings()
