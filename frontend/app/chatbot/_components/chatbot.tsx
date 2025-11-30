"use client";

import { useState } from "react";
import { Send, Mic } from "lucide-react";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function HomePage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  const sendMessage = async (msg?: string) => {
    const userText = msg || input;
    if (!userText.trim()) return;

    setStarted(true);

    const newMessage: ChatMessage = { sender: "user", text: userText };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/v1/health-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: newMessage.text,
          user_id: "frontend-demo",
          language: "en",
          cultural_background: "general",
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.response || "⚠️ No response received" },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ System error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
      <main className="min-h-screen flex flex-col bg-gradient-to-b from-[var(--secondary-color)] to-[var(--tertiary-color)]">
        {!started ? (
            // Initial Landing Screen
            <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
              {/* Logo */}
              <div className="mb-6">
            <span className="text-4xl font-extrabold text-[var(--primary-color)]">
              🏥
            </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl font-bold text-gray-800 mb-3">
                How can we <span className="text-[var(--primary-color)]">assist</span> you today?
              </h1>

              {/* Subtext */}
              <p className="text-gray-600 max-w-xl mb-8">
                Get quick, reliable health guidance powered by AfiyaLink. Choose a
                prompt to get started or type your own health question below.
              </p>

              {/* Suggested Prompts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mb-12">
                {[
                  "Headache Help",
                  "Medication Info",
                  "Wellness Tips",
                  "General Support",
                ].map((prompt) => (
                    <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="p-4 bg-white shadow-md rounded-xl text-gray-800 font-medium hover:shadow-lg transition"
                    >
                      {prompt}
                    </button>
                ))}
              </div>

              {/* Input */}
              <div className="w-full max-w-2xl flex items-center border rounded-full px-4 py-2 bg-white shadow-md">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your prompt here..."
                    className="flex-1 px-2 py-2 focus:outline-none"
                />
                <button
                    onClick={() => sendMessage()}
                    disabled={loading}
                    className="text-white bg-[var(--primary-color)] p-2 rounded-full disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
                <button className="ml-2 text-gray-500 hover:text-[var(--primary-color)]">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
            </div>
        ) : (
            // Chat Screen
            <div className="flex flex-col flex-1 items-center justify-center p-6">
              <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 flex flex-col flex-1">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                  {messages.map((msg, idx) => (
                      <div
                          key={idx}
                          className={`p-3 rounded-xl max-w-[80%] ${
                              msg.sender === "user"
                                  ? "ml-auto bg-[var(--primary-color)] text-white"
                                  : "mr-auto bg-gray-100 text-gray-800"
                          }`}
                      >
                        {msg.text}
                      </div>
                  ))}
                  {loading && (
                      <div className="mr-auto bg-gray-100 text-gray-600 p-3 rounded-xl">
                        Typing...
                      </div>
                  )}
                </div>

                {/* Input Box */}
                <div className="flex gap-2">
                  <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask your health question..."
                      className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                  />
                  <button
                      onClick={() => sendMessage()}
                      disabled={loading}
                      className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-xl flex items-center justify-center disabled:opacity-50"
                  >
                    <Send />
                  </button>
                </div>
              </div>
            </div>
        )}
      </main>
  );
}
