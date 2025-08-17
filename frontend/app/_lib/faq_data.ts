import { HelpCircle, Eye, Mic, Bot, Globe, ShieldCheck } from "lucide-react";

type FAQ = {
  id: string;
  icon: React.ElementType;
  question: string;
  answer: string;
};

export const faq_data: FAQ[] = [
  {
    id: "realtime-translation",
    icon: Globe,
    question: "How does real-time translation work in AfiyaLink?",
    answer:
      "Our on-device ASR + NMT pipeline supports Arabic ↔ English with dialect handling. It’s optimized for clinical phrases so doctors and patients get clear, context-aware translations.",
  },
  {
    id: "accessibility",
    icon: Eye,
    question: "What accessibility features are built in?",
    answer:
      "Large text modes, high-contrast UI, screen-reader friendly labels (WCAG 2.2), keyboard navigation, and voice control. We also support captions and transcripts for audio content.",
  },
  {
    id: "voice-assistant",
    icon: Mic,
    question: "Can I navigate the app hands-free?",
    answer:
      "Yes. The voice assistant lets you open tools, search clinics, and get instructions without touching the screen—ideal for visually impaired users or when your hands are busy.",
  },
  {
    id: "chatbot",
    icon: Bot,
    question: "Is the chatbot safe to use for medical advice?",
    answer:
      "It provides symptom guidance and educational info, not diagnoses. Urgent-care heuristics flag emergencies and route you to local hotlines or nearby clinics.",
  },
  {
    id: "offline",
    icon: ShieldCheck,
    question: "Does it work offline?",
    answer:
      "Critical features like first-aid guides, medication reminders, and saved phrases are available offline. Online services (maps, telehealth) re-sync when connectivity returns.",
  },
];
