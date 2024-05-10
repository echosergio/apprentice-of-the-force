from dataclasses import dataclass
from typing import Callable, Coroutine, Any

import pytest

from src.seedwork.application.commands import Command
from src.seedwork.application.message_bus import MessageBus
from src.seedwork.application.results import Result


@dataclass(frozen=True)
class CreateCommand(Command):
    message = "I am CreateCommand"


async def create_batch(command: CreateCommand) -> Result:
    return Result(payload=command.message)


COMMAND_HANDLERS: dict[type[Command], Callable[[...], Coroutine[Any, Any, Result]]] = {
    CreateCommand: create_batch,
}


@pytest.mark.asyncio
async def test_handle_command():
    message_bus = MessageBus(
        event_handlers={},
        query_handlers={},
        command_handlers=COMMAND_HANDLERS,
    )

    result = await message_bus.handle(CreateCommand())

    assert isinstance(result, Result)
