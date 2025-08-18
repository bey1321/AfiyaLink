"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Button,
} from "@/common/components/ui";
import { languages } from "../_lib/language_list"; 
import { translateText } from "../_lib/api"; 

export default function MedicalTranslator() {
  const [sourceLang, setSourceLang] = useState("zh-cn");
  const [targetLang, setTargetLang] = useState("en");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    try {
      const data = await translateText(inputText, sourceLang, targetLang);
      setTranslatedText(data.translated_text || "");
    } catch (error) {
      console.error("Translation failed:", error);
      setTranslatedText("⚠️ Translation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle>Medical Translator</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Language selectors */}
        <div className="flex gap-4 mb-4 items-center">
          <Select value={sourceLang} onValueChange={setSourceLang}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select source language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang, idx) => (
                <SelectItem key={`${lang.code}-${idx}`} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={handleSwap}>
            ⇄
          </Button>

          <Select value={targetLang} onValueChange={setTargetLang}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select target language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang, idx) => (
                <SelectItem key={`${lang.code}-${idx}`} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Textareas */}
        <div className="flex gap-4">
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text"
            className="h-40"
          />
          <Textarea
            value={translatedText}
            placeholder={loading ? "Translating..." : "Translation"}
            readOnly
            className="h-40 bg-muted"
          />
        </div>

        {/* Translate button */}
        <div className="mt-4 flex justify-end">
          <Button onClick={handleTranslate} disabled={loading}>
            {loading ? "Translating..." : "Translate"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
