import logging

from fastapi import FastAPI

from src.entrypoints.api.config import Settings
from src.entrypoints.api.routes import endpoints, healthcheck


logger = logging.getLogger(__name__)

settings = Settings()

app = FastAPI()

app.include_router(healthcheck.router)
app.include_router(endpoints.router)
