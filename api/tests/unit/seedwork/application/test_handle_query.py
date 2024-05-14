from dataclasses import dataclass
from collections.abc import Callable, Coroutine
from typing import Any

import pytest

from src.seedwork.application.message_bus import MessageBus
from src.seedwork.application.queries import Query
from src.seedwork.application.results import Result


@dataclass(frozen=True)
class GetQuery(Query):
    message = "I am GetQuery"


async def get_batch(query: GetQuery) -> Result:
    return Result(payload=query.message)


QUERY_HANDLERS: dict[type[Query], Callable[..., Coroutine[Any, Any, Result]]] = {
    GetQuery: get_batch,
}


@pytest.mark.asyncio
async def test_handle_query():
    message_bus = MessageBus(
        event_handlers={},
        query_handlers=QUERY_HANDLERS,
        command_handlers={},
    )

    result = await message_bus.handle(GetQuery())

    assert isinstance(result, Result)
