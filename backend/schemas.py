from pydantic import BaseModel, EmailStr
from typing import Optional, List
from datetime import datetime


# ─── Produits ───────────────────────────────────────────
class ProductBase(BaseModel):
    name_fr: str
    name_ar: str
    desc_fr: Optional[str] = None
    desc_ar: Optional[str] = None
    price: float
    badge: Optional[str] = None
    img: Optional[str] = None
    is_available: bool = True


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    name_fr: Optional[str] = None
    name_ar: Optional[str] = None
    desc_fr: Optional[str] = None
    desc_ar: Optional[str] = None
    price: Optional[float] = None
    badge: Optional[str] = None
    img: Optional[str] = None
    is_available: Optional[bool] = None


class ProductOut(ProductBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


# ─── Commandes ──────────────────────────────────────────
class OrderItemCreate(BaseModel):
    product_id: int
    quantity: int
    unit_price: float


class OrderItemOut(BaseModel):
    id: int
    product_id: int
    quantity: int
    unit_price: float

    class Config:
        from_attributes = True


class OrderCreate(BaseModel):
    customer_name: str
    customer_phone: str
    customer_address: Optional[str] = None
    delivery: bool = False
    notes: Optional[str] = None
    items: List[OrderItemCreate]


class OrderOut(BaseModel):
    id: int
    customer_name: str
    customer_phone: str
    customer_address: Optional[str]
    delivery: bool
    total_price: float
    status: str
    notes: Optional[str]
    created_at: datetime
    items: List[OrderItemOut]

    class Config:
        from_attributes = True


# ─── Auth Admin ─────────────────────────────────────────
class AdminCreate(BaseModel):
    email: EmailStr
    password: str


class AdminOut(BaseModel):
    id: int
    email: str
    is_active: bool

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None
