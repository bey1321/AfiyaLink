from openai import OpenAI
from translate import Translator
import logging
from pathlib import Path
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()
# Get API key from .env
api_key = os.getenv("OPENROUTER_API_KEY")
base_url = os.getenv("OPENROUTER_BASE_URL")
text_refining_model = os.getenv("TEXT_REFINING_MODEL")

# Configure logging
logging.basicConfig(level=logging.INFO)

# OpenAI (OpenRouter) client
client = OpenAI(
    base_url=base_url,
    api_key=api_key
)

def load_prompt_template(file_path: str) -> str:
    try:
        return Path(file_path).read_text()
    except Exception as e:
        logging.error(f"Failed to load prompt template: {e}")
        return ""

def refine_medical_text(raw_text: str) -> str:
    template_path = "prompts/text_input_refinement.txt"
    template = load_prompt_template(template_path)

    prompt = template.replace("{input}", raw_text)

    try:
        response = client.chat.completions.create(
            model=text_refining_model,
            messages=[
                {
                    "role": "system",
                    "content": "You are a clinical language specialist. You rewrite informal health descriptions into formal clinical language only."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        logging.error(f"[OpenAI API Error] {e}")
        return raw_text

def simple_translate(text: str, source: str, target: str) -> str:
    try:
        translator = Translator(from_lang=source, to_lang=target)
        return translator.translate(text)
    except Exception as e:
        logging.error(f"[Translation Error] {e}")
        return f"[Translation Error] {e}"
