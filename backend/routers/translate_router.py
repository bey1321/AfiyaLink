from fastapi import APIRouter
from schemas.translate_schema import TranslateRequest
from services.translation_service import refine_medical_text, simple_translate

router = APIRouter()

@router.post("/translate")
def translate_text(request: TranslateRequest):
    refined = refine_medical_text(request.text)
    translated = simple_translate(refined, request.source_language, request.target_language)
    return {
        "original_text": request.text,
        "refined_text": refined,
        "translated_text": translated
    }
