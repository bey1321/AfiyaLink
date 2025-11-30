"use client";

import React, { useState } from "react";
import Image from "next/image";
import { features_data } from "../_lib/features_data";

export const KeyFeatures = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + features_data.length) % features_data.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % features_data.length);
  };

  return (
    <section className="bg-accent-color text-white py-16 px-6 md:px-20">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl text-primary-color font-bold">All you need to integrate AI with your plan</h2>
          <p className="text-gray-400 mt-2">Explore the key features of our accessibility-based app.</p>
        </div>
        <div className="space-x-3">
          <button
            onClick={prev}
            className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => {
          const item = features_data[(current + index) % features_data.length];
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-primary-color rounded-xl p-6 shadow-lg hover:shadow-blue-700 transition"
            >
              {/* Feature Image */}
              <div className="mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="rounded-md object-cover w-full h-48"
                />
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-blue-900" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyFeatures;
