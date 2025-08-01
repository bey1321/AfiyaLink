from openai import OpenAI
from translate import Translator
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(level=logging.INFO)

# OpenAI (OpenRouter) client
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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"
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
            model="deepseek/deepseek-r1",
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
