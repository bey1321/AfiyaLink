const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function translateText(
  text: string,
  sourceLang: string,
  targetLang: string
) {
  const response = await fetch(`${API_BASE_URL}/translate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      source_language: sourceLang,
      target_language: targetLang,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
}
