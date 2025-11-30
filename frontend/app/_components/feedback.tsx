"use client";

import React, { useState } from "react";

export default function UserFeedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send feedback to your backend or API
    console.log({ name, email, feedback });
    setSubmitted(true);
    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <section className="bg-tertiary-color py-16 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-primary-color text-3xl md:text-4xl font-bold mb-4">
          Share Your Feedback
        </h2>
        <p className="text-secondary-color mb-8">
          Help us improve accessibility and user experience.
        </p>

        {submitted ? (
          <div className="bg-accent-color text-primary-color p-6 rounded-lg shadow-md">
            <p>Thank you for your feedback! 💙</p>
          </div>
        ) : (
          <form
            className="grid gap-4 md:grid-cols-1"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 rounded-md border border-secondary-color focus:outline-none focus:ring-2 focus:ring-primary-color"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-md border border-secondary-color focus:outline-none focus:ring-2 focus:ring-primary-color"
              required
            />
            <textarea
              placeholder="Your Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="p-3 rounded-md border border-secondary-color focus:outline-none focus:ring-2 focus:ring-primary-color h-32 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary-color text-white font-semibold py-3 px-6 rounded-md hover:bg-secondary-color transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
