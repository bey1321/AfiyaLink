"use client"

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

const languages = [
  "English",
  "Chinese (Simplified)",
  "Spanish",
  "French",
  "Arabic",
  "Amharic",
  "Hindi",
  // add more as needed
];

export default function MedicalTranslator() {
  const [sourceLang, setSourceLang] = useState("Chinese (Simplified)");
  const [targetLang, setTargetLang] = useState("English");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleSwap = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  return (
    <Card className="max-w-3xl mx-auto mt-10 shadow-lg">
      <CardHeader>
        <CardTitle>Medical Translator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4 items-center">
          <Select value={sourceLang} onValueChange={setSourceLang}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select source language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
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
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4">
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text"
            className="h-40"
          />
          <Textarea
            value={translatedText}
            placeholder="Translation"
            readOnly
            className="h-40 bg-muted"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <Button onClick={() => setTranslatedText(inputText)}>
            Translate
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}