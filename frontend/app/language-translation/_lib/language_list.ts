import ISO6391 from "iso-639-1";

const selectedLanguages = [
  "English",
  "Chinese",
  "Spanish",
  "French",
  "German",
  "Arabic",
  "Hindi",
  "Bengali",
  "Urdu",
  "Japanese",
  "Korean",
  "Italian",
  "Portuguese",
  "Russian",
  "Turkish",
  "Vietnamese",
  "Thai",
  "Persian",
  "Malay",
  "Indonesian",
  "Swahili",
  "Dutch",
  "Greek",
  "Polish",
  "Romanian",
  "Hungarian",
  "Czech",
  "Slovak",
  "Finnish",
  "Swedish",
  "Norwegian",
  "Danish",
  "Hebrew",
  "Punjabi",
  "Marathi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Gujarati",
  "Burmese",
  "Nepali",
  "Sinhala",
  "Khmer",
  "Lao",
  "Filipino",
  "Haitian Creole",
  "Uzbek",
  "Kazakh",
  "Amharic"
];

// Map to objects with name + ISO code
export const languages = selectedLanguages.map((name) => {
  let code = ISO6391.getCode(name);

  // Handle special cases if ISO6391 doesn’t have the exact name
  if (!code) {
    if (name === "Chinese") code = "zh";
    else if (name === "Amharic") code = "am";
  }
 // Optional: skip if still undefined
  if (!code) {
    console.warn(`Missing ISO code for language: ${name}`);
    return null;
  }

  return { name, code };
}).filter(Boolean); // remove nulls
