from abc import ABC
from uuid import UUID

from src.domain.entities import Character
from src.seedwork.infrastructure.repositories import BaseRepository


class CharactersRepository(BaseRepository[Character, UUID], ABC):
    ...
