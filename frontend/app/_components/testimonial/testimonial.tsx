"use client";

import { testimonials } from "../../_lib/testimonialContent";
import Marquee from "react-fast-marquee";
import { TestimonialCard } from "./testimonialCard";
import "../../styles/marquee.css"; // contains vertical animations

export const TestimonialComponent = () => {
  return (
    <div className="relative w-full overflow-hidden py-16">
      {/* Horizontal marquee for small screens */}
      <div className="flex flex-col gap-6 lg:hidden">
        <Marquee pauseOnHover speed={40} gradient={false}>
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </Marquee>
        <Marquee pauseOnHover speed={40} direction="right" gradient={false}>
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={`rev-${t.id}`} {...t} />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Vertical two-column marquee for large screens */}
      <div className="hidden lg:flex h-[500px] gap-8">
        {/* Column 1 – scrolls up */}
        <div className="w-1/2 overflow-hidden">
          <div className="animate-vertical-marquee-up flex flex-col gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={`col1-${t.id}`} {...t} />
            ))}
            {/* Repeat for seamless scroll */}
            {testimonials.map((t) => (
              <TestimonialCard key={`col1-dupe-${t.id}`} {...t} />
            ))}
          </div>
        </div>

        {/* Column 2 – scrolls down */}
        <div className="w-1/2 overflow-hidden">
          <div className="animate-vertical-marquee-down flex flex-col gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={`col2-${t.id}`} {...t} />
            ))}
            {testimonials.map((t) => (
              <TestimonialCard key={`col2-dupe-${t.id}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
