import { Card, CardContent } from "@/common/components/ui";
import Image from "next/image";

  interface ITestimonialProps {
      name: string;
      role: string;
      quote: string;
      image: string;
  }

export const TestimonialCard = ({
  name,
  role,
  quote,
  image
}: ITestimonialProps) => {

  return ( 
    <Card className="bg-primary-color w-full max-w-65 border-none pb-3">
          <CardContent className="flex flex-col gap-2">
            <div className="mt-1 flex items-center gap-2">
              <div className="relative h-8 w-8 shrink-0 sm:h-10 sm:w-10 md:h-12 md:w-12">
                <Image
                  src={`/Testimonial/testimonial_1.png`}
                  alt={name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] leading-tight font-semibold text-neutral-50 sm:text-xs md:text-sm">
                  {name}
                </p>
                <p className="text-[9px] leading-tight text-neutral-50 sm:text-[10px] md:text-xs">
                  {role}
                </p>
              </div>
            </div>
    
            <p className="mt-2 text-[11px] leading-snug text-neutral-300 sm:text-sm md:text-base">
              {quote}
            </p>
          </CardContent>
        </Card>
   );
}
