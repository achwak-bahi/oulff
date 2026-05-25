# Oulf — Backend API 🎂

Backend FastAPI pour la pâtisserie **Oulf (أُلف)**.

## Stack technique

- **Python** 3.11+
- **FastAPI** — API REST
- **PostgreSQL** — Base de données
- **SQLAlchemy** — ORM
- **Alembic** — Migrations
- **JWT** — Authentification admin

## Installation

```bash
# 1. Aller dans le dossier backend
cd backend

# 2. Créer un environnement virtuel
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. Installer les dépendances
pip install -r requirements.txt

# 4. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec tes vraies valeurs

# 5. Initialiser la base de données
python seed.py

# 6. Lancer le serveur
uvicorn main:app --reload
```

## Endpoints principaux

| Méthode | URL | Accès | Description |
|---|---|---|---|
| GET | `/api/products/` | Public | Liste des produits |
| POST | `/api/products/` | Admin | Créer un produit |
| PUT | `/api/products/{id}` | Admin | Modifier un produit |
| DELETE | `/api/products/{id}` | Admin | Supprimer un produit |
| POST | `/api/orders/` | Public | Créer une commande |
| GET | `/api/orders/` | Admin | Liste des commandes |
| POST | `/api/auth/login` | Public | Connexion admin |
| GET | `/api/auth/me` | Admin | Profil admin |

## Documentation interactive

Une fois le serveur lancé, accéder à :
- **Swagger UI** : http://localhost:8000/docs
- **ReDoc** : http://localhost:8000/redoc
