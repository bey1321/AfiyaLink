"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { faq_data as faqs } from "../_lib/faq_data";

export default function Faq() {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <section className="relative py-20">
      {/* soft radial glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, var(--accent-color, #D1F8EF) 0%, transparent 60%), radial-gradient(900px 500px at 90% 110%, var(--tertiary-color, #A1E3F9) 0%, transparent 60%)",
          opacity: 0.25,
        }}
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* header */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--primary-color)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            Everything about AfiyaLink’s accessibility, privacy, and core features.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => setValue("all")}
              className="border-0"
              style={{
                background:
                  "linear-gradient(90deg, var(--primary-color), var(--secondary-color))",
              }}
            >
              Expand all
            </Button>
            <Button
              variant="outline"
              onClick={() => setValue(undefined)}
              style={{ borderColor: "var(--secondary-color)" }}
            >
              Collapse all
            </Button>
          </div>
        </div>

        {/* FAQ items */}
        <Accordion
          type={value === "all" ? "multiple" : "single"}
          collapsible
          value={value === "all" ? faqs.map((f) => f.id) : value}
          onValueChange={(v) => {
            if (Array.isArray(v)) return; // multiple mode (Expand all)
            setValue(v as string);
          }}
          className="space-y-4"
        >
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border rounded-xl shadow-md bg-[var(--accent-color)]"
            >
              <AccordionTrigger className="group px-4 py-4">
                <div className="flex items-center gap-3 text-left">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--secondary-color), var(--tertiary-color))",
                    }}
                  >
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-[var(--primary-color)]">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-[3.5rem] pr-4 pb-4 text-sm sm:text-base text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* footer note */}
        <p className="mt-6 text-center text-xs sm:text-sm text-muted-foreground">
          Still stuck?{" "}
          <a
            href="#contact"
            className="underline"
            style={{ color: "var(--secondary-color)" }}
          >
            Contact support
          </a>{" "}
          or read our{" "}
          <a
            href="#privacy"
            className="underline"
            style={{ color: "var(--secondary-color)" }}
          >
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
