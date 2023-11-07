from fastapi import FastAPI
import psycopg2
from psycopg2.extras import RealDictCursor
import time
from . import models
from .database import engine
from .routers import user, auth

#uvicorn app.main:app --reload

models.Base.metadata.create_all(bind=engine)#create the database tables defined in your SQLAlchemy models if they don't already exist

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