import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card";
import { services_data } from "../_lib/services_data";

export function Services() {
  return (
    <section className="flex flex-col gap-16 py-16">
      <h2 className="text-5xl font-semibold text-center">
        How AfiyaLink Works
      </h2>
      <div className="flex flex-col gap-16">
        {services_data.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Gradient Wrapper */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="bg-gradient-to-br from-[#3674B5] via-[#578FCA] via-[#A1E3F9] to-[#D1F8EF] p-6 rounded-2xl flex items-center justify-center w-full max-w-md h-[350px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Text */}
            {/* Text */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <Card className="w-full max-w-md shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex gap-3">
                      <feature.icon className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="font-semibold text-lg">
                          {feature.subtitle}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
