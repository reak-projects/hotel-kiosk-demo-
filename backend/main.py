# ============================================
# Hotel Kiosk Backend — FastAPI Entry Point
# ============================================
# TODO: Implement API endpoints for kiosk operations


from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Hotel Kiosk Management API",
    description="Backend API for the Hotel Self-Service Kiosk System",
    version="0.1.0",
)

# CORS for frontend dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hotel Kiosk Management API", "status": "running"}


@app.get("/health")
async def health():
    return {"status": "healthy"}
