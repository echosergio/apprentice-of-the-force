import logging

from fastapi import FastAPI, Request, Response

from src.entrypoints.api.mappers import map_to_500


def add_error_handlers(app: FastAPI) -> None:
    app.add_exception_handler(Exception, error_handler)


async def error_handler(_: Request, exc: Exception) -> Response:
    logging.error(msg="Internal server error", exc_info=exc)
    return map_to_500()