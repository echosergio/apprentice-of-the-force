from dataclasses import dataclass
from collections.abc import Callable, Coroutine
from typing import Any

import pytest

from src.seedwork.application.message_bus import MessageBus
from src.seedwork.domain.events import DomainEvent
from src.seedwork.domain.exceptions import DomainError, ReasonCode


@dataclass(frozen=True)
class CreatedDomainEvent(DomainEvent):
    message = "I am CreatedDomainEvent"


async def batch_created(event: CreatedDomainEvent) -> None:
    ...


async def batch_created_2(event: CreatedDomainEvent) -> None:
    ...


EVENT_HANDLERS: dict[type[DomainEvent], list[Callable[..., Coroutine[Any, Any, None]]]] = {
    CreatedDomainEvent: [batch_created, batch_created_2],
}


@pytest.mark.asyncio
async def test_handle_event():
    message_bus = MessageBus(
        event_handlers=EVENT_HANDLERS,
        query_handlers={},
        command_handlers={},
    )

    await message_bus.handle(CreatedDomainEvent())

    assert message_bus.queue == []


@pytest.mark.asyncio
async def test_handle_event_raises_exception():
    async def batch_created_1_2(event: CreatedDomainEvent) -> None:
        raise DomainError("I am BatchCreated exception", "reason_code", ReasonCode.invalid_operation)

    message_bus = MessageBus(
        event_handlers= {
            CreatedDomainEvent: [batch_created, batch_created_1_2]
        },
        query_handlers={},
        command_handlers={},
    )

    try:
        await message_bus.handle(CreatedDomainEvent())
    except DomainError as e:
        assert e.message == "I am BatchCreated exception"