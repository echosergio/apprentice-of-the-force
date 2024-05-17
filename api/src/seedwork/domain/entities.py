from dataclasses import asdict, dataclass, field, fields, replace
from typing import Any, Generic, Self, TypeVar

from src.seedwork.domain.events import DomainEvent


TId = TypeVar("TId")


@dataclass(eq=False, frozen=True)
class Entity(Generic[TId]):
    id: TId = field(init=False)

    def clone(self, **kwargs: Any) -> Self:
        return replace(self, **kwargs)

    def __eq__(self, other: Any) -> bool:
        if isinstance(other, type(self)):
            return self.id == other.id
        return False

    def __ne__(self, other: Any) -> bool:
        return not self.__eq__(other)

    def __hash__(self) -> int:
        return hash(self.id)

    def dict(self) -> dict[str, Any]:
        return asdict(self, dict_factory=lambda x: {k: v for (k, v) in x if v is not None})


@dataclass(kw_only=True, frozen=True)
class AggregateRoot(Entity[TId]):
    events: list[DomainEvent] = field(default_factory=list)

    def register_event(self, event: DomainEvent) -> Self:
        events = self.events.copy()
        events.append(event)
        return self.clone(events=events)

    def clone(self, **kwargs: Any) -> Self:
        return replace(self, **kwargs)

    def collect_events(self) -> list[DomainEvent]:
        # TODO: empty the internal collection
        events = self.events
        # self._events = []
        return events

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> Self:
        field_names = {f.name for f in fields(cls)}
        clean_data = {key: value for (key, value) in data.items() if key in field_names}
        return cls(**clean_data)

    def dict(self) -> dict[str, Any]:
        return asdict(self, dict_factory=lambda x: {k: v for (k, v) in x if v is not None})
