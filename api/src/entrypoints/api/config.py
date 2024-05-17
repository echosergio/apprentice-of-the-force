from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    mongo_db_name: str = "apprentice-of-the-force"
    mongo_host_options: str = "replicaSet=rs0&uuidRepresentation=standard"
    mongo_host_password: str = "example"
    mongo_host_protocol: str = "mongodb"
    mongo_host_url: str = "mongo"
    mongo_host_username: str = "mongo"
