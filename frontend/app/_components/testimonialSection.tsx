"use client";

import { motion } from "framer-motion";
import { fadeInVariant } from "../_lib/motionVariants";
import { TestimonialComponent } from "./testimonial";

export function Testimonial() {
  return (
    <motion.div
      className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-accent-color"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Side - Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="flex flex-col gap-2 text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">
            <span>
              <span className="text-primary-color">Empowering</span> Access.
            </span>
            <span>
              Trusted by{" "}
              <span className="text-primary-color">Patients & Providers.</span>
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-base leading-snug tracking-tight sm:text-lg md:text-xl lg:mx-0">
            Hear how our app is transforming healthcare for people with
            disabilities and language barriers. Real stories from real users who
            found support, clarity, and care.
          </p>
        </div>

        {/* Right Side - Animated */}
        <div className="flex w-full justify-center lg:justify-end">
          <TestimonialComponent />
        </div>
      </div>
    </motion.div>
  );
}
