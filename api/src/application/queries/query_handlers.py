from collections.abc import Callable, Coroutine
from typing import Any

from src.seedwork.application.queries import Query
from src.seedwork.application.results import Result

QUERY_HANDLERS: dict[type[Query], Callable[..., Coroutine[Any, Any, Result]]] = {}
