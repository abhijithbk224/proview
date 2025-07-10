
import React from "react";
"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/blocks/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos4Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos4 = ({
  heading = "Trusted by",
  logos = [],
  className = ""
}: Logos4Props) => {
  return (
    <section className={`py-6 ${className}`}>      
      <div className="container px-5 lg:px-0 mx-auto flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h2>
      </div>

      
      <div className="block lg:hidden container px-5 mx-auto">
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))'
          }}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center p-4">
              <img
                src={logo.image}
                alt={logo.description}
                className={`${logo.className || ''} h-20 w-auto`}              
              />
            </div>
          ))}
        </div>
      </div>

      
      <div className="hidden lg:block pt-8">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
          <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true })]}>
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex shrink-0 justify-center px-6 basis-1/6"
                >
                  <div className="flex items-center justify-center p-4">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={`${logo.className || ''} h-20 w-auto`}                    
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
         
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Logos4 };
