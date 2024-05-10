from fastapi import APIRouter, status

from src.entrypoints.api.models import Error

router = APIRouter(
    prefix="/api/v1/characters",
    tags=["Characters"],
    responses={
        status.HTTP_500_INTERNAL_SERVER_ERROR: {
            "description": "Internal server error.",
            "model": Error,
        },
        status.HTTP_503_SERVICE_UNAVAILABLE: {
            "description": "The server is currently unable to handle the request.",
            "model": Error,
        },
    },
)

