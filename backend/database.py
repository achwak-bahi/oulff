from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
import pathlib
from urllib.parse import urlparse

# Lecture manuelle du .env en UTF-8 strict
_env_path = pathlib.Path(__file__).parent / ".env"
if _env_path.exists():
    with open(_env_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, _, value = line.partition("=")
                os.environ[key.strip()] = value.strip()

DATABASE_URL = os.environ.get("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError(
        "DATABASE_URL introuvable dans backend/.env"
    )

# Parser l'URL et passer les params directement pour eviter
# les problemes d'encodage Windows avec psycopg2
_parsed = urlparse(DATABASE_URL)
_connect_args = {
    "host": _parsed.hostname or "localhost",
    "port": _parsed.port or 5432,
    "dbname": _parsed.path.lstrip("/"),
    "user": _parsed.username or "postgres",
    "password": _parsed.password or "",
    "client_encoding": "utf8",
}

engine = create_engine(
    "postgresql+psycopg2://",
    creator=lambda: __import__("psycopg2").connect(**_connect_args),
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
