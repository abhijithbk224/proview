
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/blocks/ui/button";

interface Hero1Props {
  // badge?: string;
  heading: string;
  description: string;
  blue?: boolean;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  // badge,
  heading,
  blue = false,
  description,
  buttons,
  image,
}: Hero1Props) => {
  return (
    <section
      className={`py-16 lg:py-20 ${
        blue
          // ? "bg-[url('https://proview.io/hubfs/Frame%2048097318.jpg')] bg-cover bg-center"
          ? "bg-[url('/Logos/herocolour.png')] bg-cover bg-center"
          : ""
      }`}
    >
      <div className="container mx-auto px-4">
       <div className="grid items-center gap-4 lg:gap-8 lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-4 lg:pl-16">
            <h1
              className={`mb-4 font-semibold text-gray-900 leading-tight max-w-lg ${
                blue
                  ? 'text-3xl md:text-4xl lg:text-5xl'
                  : 'text-base md:text-lg lg:text-xl'
              }`}
            >
              {heading}
            </h1>
            <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-lg">
              {description}
            </p>
            {(buttons?.primary || buttons?.secondary) && (
              <div className="flex flex-col sm:flex-row gap-3">
                {buttons?.primary && (
                  <Button asChild className="bg-[#1d4fd8] hover:bg-[#173fb0] text-white">
                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                  </Button>
                )}
                {buttons?.secondary && (
                  <Button asChild variant="outline">
                    <a href={buttons.secondary.url}>
                      {buttons.secondary.text}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        
          <div className="order-1 lg:order-2 lg:pl-8 flex justify-center lg:justify-start">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full max-w-md lg:max-w-lg max-h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
