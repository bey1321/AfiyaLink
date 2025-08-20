"use client";

import { useState } from "react";
import { Button } from "@/common/components/ui/button";
import { Input } from "@/common/components/ui/input";
import { Card, CardContent } from "@/common/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/common/components/ui/collapsible";
import { Search, Send, User, ChevronLeft, ChevronRight, Mic, Globe, Bot, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatbotUI() {
  const [prompt, setPrompt] = useState("");
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-white">
      {/* Collapsible Sidebar */}
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className={`transition-all duration-300 ${
          open ? "w-72" : "w-16"
        } bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)] text-white flex flex-col`}
      >
        {/* Toggle Button */}
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="self-end p-1 m-2 text-white rounded-full hover:bg-white/10"
          >
            {open ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        </CollapsibleTrigger>

        {/* Sidebar Content */}
        <CollapsibleContent forceMount>
          <div className="flex flex-col h-full p-4">
            <h1 className="mb-6 text-xl font-bold">AfiyaLink</h1>

            {/* Search */}
            <div className="flex items-center px-3 py-2 mb-4 rounded-lg bg-white/20">
              <Search className="w-4 h-4 mr-2 text-white" />
              <input
                placeholder="Search features"
                className="w-full text-sm text-white bg-transparent outline-none placeholder:text-white/70"
              />
            </div>

            {/* Features */}
            <div className="flex flex-col gap-2">
              {[
                { label: "Real-time Translation", icon: Globe },
                { label: "Voice Assistant", icon: Mic },
                { label: "AI Chatbot", icon: Bot },
                { label: "Clinic Finder", icon: MapPin },
              ].map((item) => (
                <Button
                  key={item.label}
                  className="flex items-center justify-between px-3 py-2 transition rounded-lg bg-white/10 hover:bg-white/20"
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </span>
                </Button>
              ))}
            </div>

            {/* Recent Chats */}
            <div className="flex-1 mt-6">
              <h2 className="mb-2 text-sm font-semibold">Recent Conversations</h2>
              <div className="flex flex-col gap-2 text-sm">
                <Button className="px-3 py-2 text-left rounded-lg bg-white/10 hover:bg-white/20">
                  Translate my prescription
                </Button>
                <Button className="px-3 py-2 text-left rounded-lg bg-white/10 hover:bg-white/20">
                  Find nearby accessible clinics
                </Button>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-[var(--tertiary-color)]/10 relative">
        {/* Tabs */}
        <div className="flex justify-center py-4 space-x-6 bg-white shadow-md">
          {["Translation", "Voice Assistant", "Chatbot", "Clinic Finder"].map((tab, i) => (
            <Button
              key={i}
              className={`px-4 py-2 rounded-full ${
                i === 0
                  ? "bg-primary-color text-white"
                  : "text-gray-600 bg-white hover:bg-accent-color"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center flex-1 px-6 text-center">
          <motion.h2
            className="mb-4 text-3xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Inclusive Digital Health for{" "}
            <span className="text-[var(--primary-color)]">Everyone</span>
          </motion.h2>
          <p className="max-w-lg mb-8 text-gray-600">
            Break down language and accessibility barriers in healthcare with
            real-time AI support, voice assistants, chatbots, and more.
          </p>

          {/* Quick Feature Cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Translate Prescriptions",
              "Ask the Voice Assistant",
              "Chat with AI",
              "Find Clinics Near You",
            ].map((item) => (
              <Card
                key={item}
                className="border border-gray-200 shadow-md cursor-pointer rounded-2xl hover:shadow-lg"
              >
                <CardContent className="p-6 font-medium text-center">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-0 left-0 flex items-center w-full p-4 bg-white border-t">
          <Input
            placeholder="Type your request (e.g., 'Translate this prescription')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 px-4 rounded-full"
          />
          <Button className="ml-3 rounded-full bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </main>
    </div>
  );
}
