from dataclasses import dataclass, field
from typing import Any

from src.seedwork.domain.events import DomainEvent


@dataclass(frozen=True)
class Result:
    payload: Any | None = None
    events: list[DomainEvent] = field(default_factory=list)
