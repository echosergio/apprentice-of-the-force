from fastapi import Response, status
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel

from src.entrypoints.api.models import Error, ErrorDetails, InputError
from src.seedwork.domain.exceptions import DomainError, ReasonCode


def to_response(status_code: int, model: BaseModel | None) -> Response:
    return Response(
        status_code=status_code,
        media_type="application/json",
        content=model.model_dump_json(exclude_none=True) if model is not None else "",
    )


def map_error_response(error: DomainError) -> Response:
    cases = {
        ReasonCode.resource_error: status.HTTP_404_NOT_FOUND,
        ReasonCode.internal_error: status.HTTP_500_INTERNAL_SERVER_ERROR,
        ReasonCode.invalid_operation: status.HTTP_422_UNPROCESSABLE_ENTITY,
    }

    return to_response(status_code=cases[error.reason_code], model=Error(code=error.code, message=error.message))


def map_to_500() -> Response:
    return to_response(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        model=Error(code=ReasonCode.internal_error, message="Internal Server Error"),
    )


def map_to_204() -> Response:
    return to_response(status_code=status.HTTP_204_NO_CONTENT, model=None)


def map_to_400(exc: RequestValidationError) -> Response:
    return to_response(
        status_code=status.HTTP_400_BAD_REQUEST,
        model=InputError(
            code="invalid_request",
            message="One or more inputs are invalid",
            errors=[parse_error(error) for error in exc.errors()],
        ),
    )


def map_to_401(code: str, message: str) -> Response:
    return to_response(status_code=401, model=Error(code=code, message=message))


def map_to_404() -> Response:
    return to_response(
        status_code=status.HTTP_404_NOT_FOUND, model=Error(code="resource_not_found", message="Resource not found")
    )


def map_to_409() -> Response:
    return to_response(
        status_code=status.HTTP_409_CONFLICT, model=Error(code="duplicated_resource", message="Resource already exists")
    )


def parse_error(error: dict[str, str]) -> ErrorDetails:
    return ErrorDetails(name=".".join(error["loc"]), reason=error["msg"], code=error["type"])
