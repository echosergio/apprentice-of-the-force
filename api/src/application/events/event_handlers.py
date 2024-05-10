from typing import Callable, Coroutine, Any

from src.seedwork.domain.events import DomainEvent

EVENT_HANDLERS: dict[type[DomainEvent], list[Callable[[...], Coroutine[Any, Any, None]]]] = {}
