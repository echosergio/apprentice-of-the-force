FROM python:3.12-slim AS base
RUN apt-get update && apt-get install -y --no-install-recommends gcc g++ && apt-get clean
RUN pip install --no-cache-dir --upgrade pip
WORKDIR /home/app

FROM base AS deploy
COPY ./requirements.txt /requirements.txt
RUN pip install --no-cache-dir --upgrade -r /requirements.txt
COPY ./src ./src

EXPOSE 80

CMD ["uvicorn", "src.entrypoints.api.main:app", "--host", "0.0.0.0", "--port", "80"]


FROM base AS dev
COPY ./requirements.txt /requirements.txt
COPY ./dev-requirements.txt /dev-requirements.txt
RUN pip install --no-cache-dir --upgrade -r /dev-requirements.txt
COPY ./src ./src
COPY ./tests ./tests
RUN opentelemetry-bootstrap -a install

EXPOSE 80

CMD ["opentelemetry-instrument", "uvicorn", "src.entrypoints.api.main:app", "--host", "0.0.0.0", "--port", "80"]
