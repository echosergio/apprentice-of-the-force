from dataclasses import dataclass

from src.seedwork.domain.exceptions import DomainError


@dataclass(frozen=True)
class CharacterNotFoundError(DomainError):
    pass
