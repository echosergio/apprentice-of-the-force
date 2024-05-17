from collections.abc import Callable, Coroutine
from typing import Any

from src.seedwork.domain.events import DomainEvent

EVENT_HANDLERS: dict[type[DomainEvent], list[Callable[..., Coroutine[Any, Any, None]]]] = {}
