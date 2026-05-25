from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from database import get_db
import models
import schemas
import auth as auth_utils
import os

router = APIRouter(prefix="/api/auth", tags=["Authentification"])


@router.post("/login", response_model=schemas.Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    admin = db.query(models.Admin).filter(models.Admin.email == form_data.username).first()
    if not admin or not auth_utils.verify_password(form_data.password, admin.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = auth_utils.create_access_token(data={"sub": admin.email})
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=schemas.AdminOut)
def get_me(current_admin=Depends(auth_utils.get_current_admin)):
    return current_admin
