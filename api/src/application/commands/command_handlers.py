from collections.abc import Callable, Coroutine
from typing import Any

from src.seedwork.application.commands import Command
from src.seedwork.application.results import Result

COMMAND_HANDLERS: dict[type[Command], Callable[..., Coroutine[Any, Any, Result]]] = {}
