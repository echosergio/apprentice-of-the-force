from dataclasses import dataclass


@dataclass(frozen=True)
class DomainEvent:
    pass


@dataclass(frozen=True)
class CompositeDomainEvent(DomainEvent):
    _events: list[DomainEvent]

    def events(self) -> list[DomainEvent]:
        return self._events
