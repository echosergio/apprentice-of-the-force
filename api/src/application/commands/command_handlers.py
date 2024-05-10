from typing import Callable, Coroutine, Any

from src.seedwork.application.commands import Command
from src.seedwork.application.results import Result

COMMAND_HANDLERS: dict[type[Command], Callable[[...], Coroutine[Any, Any, Result]]] = {}
