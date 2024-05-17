from typing import Any

from fastapi import APIRouter


router = APIRouter()


@router.get("/live", status_code=200, tags=["healthcheck"])
async def liveness() -> dict[str, Any]:
    return {}


@router.get("/ready", status_code=200, tags=["healthcheck"])
async def readiness() -> dict[str, Any]:
    return {}


@router.get("/health", status_code=200, tags=["healthcheck"])
async def health() -> dict[str, Any]:
    return {
        "status": "pass",
        "version": "1.0.0",
        "releaseId": "1.0.0",
        "serviceId": "assistants-api",
        "description": "Assistants API",
        "checks": [],
    }


@router.get("/health/details", status_code=200, tags=["healthcheck"])
async def health_details() -> dict[str, Any]:
    return {
        "status": "pass",
        "version": "1.0.0",
        "releaseId": "1.0.0",
        "serviceId": "assistants-api",
        "description": "Assistants API",
        "checks": [],
    }
