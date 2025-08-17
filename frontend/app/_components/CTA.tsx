import { Button } from "../../components/ui/button";

export function CTA() {
  return (
    <section className="text-center mt-20 px-4 py-16 bg-accent-color rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-primary-color">Get Involved</h2>
      <p className="text-lg mb-8 text-[--secondary-color]">
        Join our pilot program or support the development of <span className="font-semibold text-tertiary-color">AfiyaLink</span>.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button
          variant="default"
          className="bg-primary-color text-white hover:bg-secondary-color transition-all duration-200"
        >
          Join Pilot
        </Button>
        <Button
          variant="outline"
          className="border-primary-color text-primary-color hover:bg-tertiary-color transition-all duration-200"
        >
          Partner With Us
        </Button>
      </div>
    </section>
  );
}
