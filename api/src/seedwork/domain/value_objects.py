from dataclasses import dataclass
from typing import Any


@dataclass(eq=False, frozen=True, kw_only=True)
class ValueObject:
    def __eq__(self, other: Any) -> bool:
        if isinstance(other, type(self)):
            return self.__dict__ == other.__dict__
        return False

    def __ne__(self, other: Any) -> bool:
        return not self.__eq__(other)

    def __hash__(self) -> int:
        return hash(tuple(sorted(self.__dict__.items())))
