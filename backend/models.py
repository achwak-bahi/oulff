from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, Text, ForeignKey, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum
from database import Base


class BadgeType(str, enum.Enum):
    popular = "popular"
    new = "new"
    limited = "limited"


class OrderStatus(str, enum.Enum):
    pending = "pending"
    confirmed = "confirmed"
    delivered = "delivered"
    cancelled = "cancelled"


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name_fr = Column(String(200), nullable=False)
    name_ar = Column(String(200), nullable=False)
    desc_fr = Column(Text, nullable=True)
    desc_ar = Column(Text, nullable=True)
    price = Column(Float, nullable=False)
    badge = Column(String(50), nullable=True)
    img = Column(String(500), nullable=True)
    is_available = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    order_items = relationship("OrderItem", back_populates="product")


class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String(200), nullable=False)
    customer_phone = Column(String(20), nullable=False)
    customer_address = Column(Text, nullable=True)
    delivery = Column(Boolean, default=False)
    total_price = Column(Float, nullable=False)
    status = Column(String(50), default=OrderStatus.pending)
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    items = relationship("OrderItem", back_populates="order")


class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"), nullable=False)
    product_id = Column(Integer, ForeignKey("products.id"), nullable=False)
    quantity = Column(Integer, nullable=False, default=1)
    unit_price = Column(Float, nullable=False)

    order = relationship("Order", back_populates="items")
    product = relationship("Product", back_populates="order_items")


class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(200), unique=True, index=True, nullable=False)
    hashed_password = Column(String(500), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
