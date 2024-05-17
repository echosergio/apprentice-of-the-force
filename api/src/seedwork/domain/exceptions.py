from abc import ABC
from dataclasses import dataclass
from enum import StrEnum


class ReasonCode(StrEnum):
    input_error = "input_error"
    internal_error = "internal_error"
    invalid_operation = "invalid_operation"
    resource_error = "resource_error"


@dataclass(frozen=True)
class DomainError(Exception, ABC):
    message: str
    code: str
    reason_code: ReasonCode
