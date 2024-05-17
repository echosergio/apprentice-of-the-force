from typing import Generic, TypeVar

from pydantic import BaseModel, Field


T = TypeVar("T")


class Error(BaseModel):
    code: str = Field(
        title="Error Details",
        description="Indicates the reason code to deny the operation",
        examples=["invalid_request"],
    )
    message: str = Field(
        title="Description",
        description="A short result description of the error",
        examples=["One or more inputs are invalid"],
    )


class ErrorDetails(BaseModel):
    code: str = Field(title="code", description="Type of the error", examples=["string_type", "string_too_long"])
    name: str = Field(title="Name", description="Name of the field with error", examples=["email"])
    reason: str = Field(title="Reason", description="Reason of the error", examples=["email must be an email"])


class InputError(Error, BaseModel):
    errors: list[ErrorDetails] = Field(title="errors", description="List of errors.")


class Resource(BaseModel, Generic[T]):
    data: T = Field(title="data", description="Created resource")


class Resources(BaseModel, Generic[T]):
    data: list[T] = Field(title="data", description="List of resources.")


class ResourcesList(BaseModel, Generic[T]):
    data: list[T] = Field(title="data", description="Resources list")
    last_page: bool = Field(title="last_page", description="Indicates if there are more pages")
    last_offset: int = Field(title="last_offset", description="Indicates which offset to start")
