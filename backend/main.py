from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import translate_router
from dotenv import load_dotenv
import os

# Load .env
load_dotenv()

app = FastAPI()

# Allow frontend origin
origins = os.getenv("ALLOWED_ORIGINS", "").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,       # Or ["*"] to allow all origins (not safe for prod)
    allow_credentials=True,
    allow_methods=["*"],         # GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],         # Authorization, Content-Type, etc.
)

app.include_router(translate_router.router)
