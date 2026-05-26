from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models
import schemas
from auth import get_current_admin

router = APIRouter(prefix="/api/orders", tags=["Commandes"])


@router.post("/", response_model=schemas.OrderOut, status_code=201)
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
    """Créer une nouvelle commande (public)"""
    total = sum(item.unit_price * item.quantity for item in order.items)
    if order.delivery:
        total += 400  # Frais de livraison Relizane

    db_order = models.Order(
        customer_name=order.customer_name,
        customer_phone=order.customer_phone,
        customer_address=order.customer_address,
        delivery=order.delivery,
        total_price=total,
        notes=order.notes,
    )
    db.add(db_order)
    db.flush()

    for item in order.items:
        db_item = models.OrderItem(
            order_id=db_order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            unit_price=item.unit_price,
        )
        db.add(db_item)

    db.commit()
    db.refresh(db_order)
    return db_order


@router.get("/", response_model=List[schemas.OrderOut])
def get_orders(
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    """Lister toutes les commandes (admin)"""
    return db.query(models.Order).order_by(models.Order.created_at.desc()).all()


@router.get("/{order_id}", response_model=schemas.OrderOut)
def get_order(
    order_id: int,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    order = db.query(models.Order).filter(models.Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Commande introuvable")
    return order


@router.put("/{order_id}/status")
def update_order_status(
    order_id: int,
    status: str,
    db: Session = Depends(get_db),
    _: dict = Depends(get_current_admin)
):
    """Mettre à jour le statut d'une commande (admin)"""
    order = db.query(models.Order).filter(models.Order.id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Commande introuvable")
    order.status = status
    db.commit()
    return {"message": "Statut mis à jour", "status": status}
