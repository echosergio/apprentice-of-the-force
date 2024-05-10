import inspect
from typing import Callable, Coroutine, Any


from src.application.commands.command_handlers import COMMAND_HANDLERS
from src.application.events.event_handlers import EVENT_HANDLERS
from src.application.queries.query_handlers import QUERY_HANDLERS
from src.domain.repositories import CharactersRepository
from src.seedwork.application.message_bus import MessageBus
from src.seedwork.application.results import Result


async def bootstrap(
    repository: CharactersRepository,
) -> MessageBus:
    dependencies = {
        "repository": repository,
    }

    injected_event_handlers = {
        # FixMe: review type-ignore
        event_type: [
            inject_event_handler(handler, dependencies) for handler in event_handlers  # type: ignore[attr-defined]
        ]
        for event_type, event_handlers in EVENT_HANDLERS.items()
    }

    injected_query_handlers = {
        query_type: inject_dependencies(handler, dependencies) for query_type, handler in QUERY_HANDLERS.items()
    }

    injected_command_handlers = {
        command_type: inject_dependencies(handler, dependencies) for command_type, handler in COMMAND_HANDLERS.items()
    }

    return MessageBus(
        event_handlers=injected_event_handlers,
        query_handlers=injected_query_handlers,
        command_handlers=injected_command_handlers,
    )


def inject_dependencies(
    handler: Callable[..., Coroutine[Any, Any, Result]], dependencies: dict[str, Any]
) -> Callable[..., Coroutine[Any, Any, Result]]:
    params = inspect.signature(handler).parameters
    deps = {name: dependency for name, dependency in dependencies.items() if name in params}
    return lambda message: handler(message, **deps)


def inject_event_handler(
    handler: Callable[..., Coroutine[Any, Any, None]], dependencies: dict[str, Any]
) -> Callable[..., Coroutine[Any, Any, None]]:
    params = inspect.signature(handler).parameters
    deps = {name: dependency for name, dependency in dependencies.items() if name in params}
    return lambda message: handler(message, **deps)
