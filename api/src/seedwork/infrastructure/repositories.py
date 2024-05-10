from abc import ABC, abstractmethod
from typing import Generic, TypeVar
from uuid import UUID

from src.seedwork.domain.entities import AggregateRoot


TId = TypeVar("TId")
# HACK: research how to use TId as parameter
TEntity = TypeVar("TEntity", bound=AggregateRoot[UUID])


class BaseRepository(ABC, Generic[TEntity, TId]):
    @abstractmethod
    async def add(self, entity: TEntity) -> TEntity:
        raise NotImplementedError()

    @abstractmethod
    async def find_all(self, limit: int = 20, skip: int = 0) -> list[TEntity]:
        raise NotImplementedError()

    @abstractmethod
    async def find_by_id(self, id: TId) -> TEntity:
        raise NotImplementedError()

    @abstractmethod
    async def update(self, entity: TEntity) -> TEntity:
        raise NotImplementedError()

    @abstractmethod
    async def delete_by_id(self, id: TId) -> bool:
        raise NotImplementedError()
