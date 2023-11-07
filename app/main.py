from multiprocessing import synchronize
from operator import ne
from typing import Optional, List
from typing_extensions import deprecated
from fastapi import FastAPI, Body, HTTPException, Response, status, Depends
import psycopg2
from random import randrange
import psycopg2
from psycopg2.extras import RealDictCursor
import time
from sqlalchemy.orm import Session
from . import models, schemas, utils
from .database import engine, get_db
from .routers import user, auth


#uvicorn app.main:app --reload

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# db connection
while True:
    try:
        conn = psycopg2.connect(host='localhost', database='fastapi', user='postgres', password='root', cursor_factory=RealDictCursor)
        cursor = conn.cursor()
        print("DB connection successful!")
        break
    except Exception as e:
        print("DB connection failed:\n ", e)
        time.sleep(10)


'''app.include_router(post.router)'''
app.include_router(user.router)
app.include_router(auth.router)


@app.get("/")
def root():
    return {"message":"hello world"}





