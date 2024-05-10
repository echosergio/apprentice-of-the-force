from dataclasses import dataclass
from uuid import UUID

from src.seedwork.domain.events import DomainEvent

@dataclass(frozen=True)
class CharacterCreated(DomainEvent):
    assistant_id: UUID
