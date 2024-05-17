from collections.abc import Callable, Coroutine
from typing import Any

from src.seedwork.application.commands import Command
from src.seedwork.application.queries import Query
from src.seedwork.application.results import Result
from src.seedwork.domain.events import DomainEvent


Message = Command | DomainEvent | Query


class MessageBus:
    queue: list[DomainEvent] = []

    def __init__(
        self,
        event_handlers: dict[type[DomainEvent], list[Callable[..., Coroutine[Any, Any, None]]]],
        query_handlers: dict[type[Query], Callable[..., Coroutine[Any, Any, Result]]],
        command_handlers: dict[type[Command], Callable[..., Coroutine[Any, Any, Result]]],
    ):
        self.event_handlers = event_handlers
        self.query_handlers = query_handlers
        self.command_handlers = command_handlers

    async def handle(self, message: Message) -> Result:
        if isinstance(message, DomainEvent):
            await self.handle_event(message)
        elif isinstance(message, Query):
            return await self.handle_query(message)
        elif isinstance(message, Command):
            return await self.handle_command(message)
        else:
            raise Exception(f"{message} was not a DomainEvent, Query or Command")

    async def handle_event(self, event: DomainEvent) -> None:
        for handler in self.event_handlers[type(event)]:
            await handler(event)

    async def handle_query(self, query: Query) -> Result:
        handler = self.query_handlers[type(query)]
        return await handler(query)

    async def handle_command(self, command: Command) -> Result:
        handler = self.command_handlers[type(command)]
        result = await handler(command)
        if result.events is not None:
            self.queue.extend(result.events)
        return result
