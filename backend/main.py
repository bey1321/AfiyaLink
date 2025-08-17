from fastapi import FastAPI
from routers import translate_router

app = FastAPI()

app.include_router(translate_router.router)
