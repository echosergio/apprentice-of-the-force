import uuid
from dataclasses import dataclass, field
from uuid import UUID, uuid4

from src.domain.enums import SideType
from src.domain.events import (
    CharacterCreated,
)
from src.seedwork.domain.entities import AggregateRoot


@dataclass(frozen=True)
class Character(AggregateRoot[UUID]):
    id: UUID = field(default_factory=uuid4)
    name: str = field(default="")
    side: SideType = field(default=SideType.light)

    @classmethod
    def new(cls, name: str) -> "Character":
        id = uuid.uuid4()
        return cls(
            id=id, name=name,
        ).register_event(CharacterCreated(assistant_id=id))


