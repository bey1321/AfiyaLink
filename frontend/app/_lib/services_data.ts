import { Globe, Mic, Bot, MapPin, Languages, Headphones } from "lucide-react";

export const services_data = [
  {
    title: "Real-time Translation",
    image: "/services/language_translation.png",
    features: [
      {
        icon: Languages,
        subtitle: "Dialect Support",
        description:
          "Translate across Arabic dialects seamlessly for clear doctor-patient communication.",
      },
      {
        icon: Globe,
        subtitle: "Medical Terminology",
        description:
          "Specialized translations ensure accurate understanding of medical instructions.",
      },
    ],
  },
  {
    title: "Voice Assistant",
    image: "/services/voice_assistant.png",
    features: [
      {
        icon: Mic,
        subtitle: "Hands-free Access",
        description:
          "Navigate health information without typing—just speak and listen.",
      },
      {
        icon: Headphones,
        subtitle: "Accessibility First",
        description:
          "Optimized for visually impaired patients to get the help they need.",
      },
    ],
  },
  {
    title: "Chatbot",
    image: "/services/chatbot.png",
    features: [
      {
        icon: Bot,
        subtitle: "24/7 Support",
        description:
          "Instant answers to health-related questions anytime, anywhere.",
      },
      {
        icon: Globe,
        subtitle: "Symptom Guidance",
        description:
          "AI-powered assistant that helps assess symptoms and suggests next steps.",
      },
    ],
  },
  {
    title: "Clinic Finder",
    image: "/services/clinic_finder.png",
    features: [
      {
        icon: MapPin,
        subtitle: "Nearby Clinics",
        description:
          "Locate the closest hospitals, clinics, and pharmacies with ease.",
      },
      {
        icon: Globe,
        subtitle: "Insurance Integration",
        description:
          "Filter results based on accepted insurance providers.",
      },
    ],
  },
];
