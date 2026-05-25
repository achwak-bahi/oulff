"""Script pour initialiser la base de données avec les données de départ."""
import os
from dotenv import load_dotenv
load_dotenv()

from database import engine, SessionLocal, Base
import models
from auth import hash_password

# Créer toutes les tables
Base.metadata.create_all(bind=engine)

db = SessionLocal()

# ─── Créer l'admin par défaut ────────────────────────────
admin_email = os.getenv("ADMIN_EMAIL", "admin@oulf.dz")
admin_password = os.getenv("ADMIN_PASSWORD", "oulf2024")

existing = db.query(models.Admin).filter(models.Admin.email == admin_email).first()
if not existing:
    admin = models.Admin(
        email=admin_email,
        hashed_password=hash_password(admin_password)
    )
    db.add(admin)
    print(f"✅ Admin créé : {admin_email}")
else:
    print(f"ℹ️  Admin déjà existant : {admin_email}")

# ─── Produits de départ ──────────────────────────────────
if db.query(models.Product).count() == 0:
    products = [
        models.Product(
            name_fr="Tartelette Maison",
            name_ar="تارتيليت بيتي",
            desc_fr="Pâte sablée croustillante garnie d'une crème onctueuse, faite avec amour",
            desc_ar="عجينة مقرمشة مع كريمة ناعمة، محضّرة بحب",
            price=180,
            badge="popular",
            img="/images/tartelettes.jpg",
            is_available=True
        ),
        models.Product(
            name_fr="Cupcake Gourmand",
            name_ar="كاب كيك فاخر",
            desc_fr="Moelleux irrésistible surmonté d'un topping crémeux et décoré à la main",
            desc_ar="إسفنجي لا يقاوم مع توبينغ كريمي ومزيّن يدوياً",
            price=80,
            badge="new",
            img="/images/Cupcake.png",
            is_available=True
        ),
        models.Product(
            name_fr="Brownie Fondant",
            name_ar="براوني فوندان",
            desc_fr="Intense en chocolat, fondant au cœur avec une croûte légèrement croustillante",
            desc_ar="كثيف بالشوكولاتة، طري من الداخل مع قشرة مقرمشة",
            price=90,
            badge=None,
            img="/images/Brownies.png",
            is_available=True
        ),
    ]
    db.add_all(products)
    print(f"✅ {len(products)} produits créés")
else:
    print("ℹ️  Produits déjà existants")

db.commit()
db.close()
print("\n🎂 Base de données initialisée avec succès !")
