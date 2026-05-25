from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

from routers import products, orders, auth

app = FastAPI(
    title="Oulf API",
    description="API backend pour la pâtisserie Oulf — أُلف",
    version="1.0.0"
)

# ─── CORS (autorise le frontend React) ──────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",   # Vite dev
        "http://localhost:3000",
        os.getenv("FRONTEND_URL", "*"),
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Routers ─────────────────────────────────────────────
app.include_router(products.router)
app.include_router(orders.router)
app.include_router(auth.router)


@app.get("/")
def root():
    return {"message": "Oulf API opérationnelle 🎂", "version": "1.0.0"}


@app.get("/health")
def health():
    return {"status": "ok"}
