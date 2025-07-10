
  
import { Button } from "@/components/blocks/ui/button";

interface Feature2Props {
  title: string;
  heading?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary?: {
    label: string;
    href: string;
  };
  buttonSecondary?: {
    label: string;
    href: string;
  };
}

const Feature5 = ({
  title = "Blocks built with Shadcn & Tailwind",
  heading,
  description = "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "placeholder hero",
  buttonPrimary,
  buttonSecondary,
}: Feature2Props) => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {heading && (
          <div className="text-center mb-8 lg:mb-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              {heading}
            </h1>
          </div>
        )}

        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Image Section */}
          <div className="lg:pl-12 flex justify-center lg:justify-end">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-md lg:max-w-lg max-h-96 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:pr-8">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-4 leading-tight max-w-lg">
              {title}
            </h2>
            {description && (
              <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-lg">
                {description}
              </p>
            )}
            {(buttonPrimary || buttonSecondary) && (
              <div className="flex flex-col sm:flex-row gap-3">
                {buttonPrimary && (
                  <Button asChild>
                    <a href={buttonPrimary.href} target="_blank">
                      {buttonPrimary.label}
                    </a>
                  </Button>
                )}
                {buttonSecondary && (
                  <Button variant="outline" asChild>
                    <a href={buttonSecondary.href} target="_blank">
                      {buttonSecondary.label}
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature5 };
