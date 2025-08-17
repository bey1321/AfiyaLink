import Image from "next/image";
import { Button } from "../../components/ui/button";

export function Hero() {
  return (
    <section className="flex h-screen items-end justify-start p-8">
      <div className="max-w-xl text-left mb-20">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Inclusive Digital Health for Everyone
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mt-4">
          Breaking language and accessibility barriers to healthcare in the MENA
          region.
        </p>
        <div className="flex gap-4 mt-6 flex-wrap">
          <Button variant="default">Try Demo</Button>
          <Button variant="outline">Watch Video</Button>
        </div>
      </div>
    </section>
  );
}
