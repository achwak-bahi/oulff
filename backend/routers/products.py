from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models
import schemas
from auth import get_current_admin

router = APIRouter(prefix="/api/products", tags=["Produits"])


@router.get("/", response_model=List[schemas.ProductOut])
def get_products(db: Session = Depends(get_db)):
    """Récupérer tous les produits disponibles (public)"""
    return db.query(models.Product).filter(models.Product.is_available == True).all()


@router.get("/all", response_model=List[schemas.ProductOut])
def get_all_products(db: Session = Depends(get_db), _: dict = Depends(get_current_admin)):
    """Récupérer tous les produits (admin uniquement)"""
    return db.query(models.Product).all()


@router.get("/{product_id}", response_model=schemas.ProductOut)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Produit introuvable")
    return product


@router.post("/", response_model=schemas.ProductOut, status_code=201)
def create_product(
    product: schemas.ProductCreate,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    """Créer un nouveau produit (admin)"""
    db_product = models.Product(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


@router.put("/{product_id}", response_model=schemas.ProductOut)
def update_product(
    product_id: int,
    product: schemas.ProductUpdate,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    """Modifier un produit (admin)"""
    db_product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail="Produit introuvable")
    for key, value in product.model_dump(exclude_unset=True).items():
        setattr(db_product, key, value)
    db.commit()
    db.refresh(db_product)
    return db_product


@router.delete("/{product_id}", status_code=204)
def delete_product(
    product_id: int,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    """Supprimer un produit (admin)"""
    db_product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not db_product:
        raise HTTPException(status_code=404, detail="Produit introuvable")
    db.delete(db_product)
    db.commit()
