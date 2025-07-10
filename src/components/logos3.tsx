
import React from "react";
"use client";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by",
  logos = [
    { id: "logo-1", description: "Logo 1", image: "/Logos/aaae-logo.svg", className: "h-7 w-auto" },
    // { id: "logo-2", description: "Logo 2", image: "/Logos/bubble-io.webp", className: "h-7 w-auto" },
    { id: "logo-3", description: "Logo 3", image: "/Logos/Cambridge.svg", className: "h-7 w-auto" },
    { id: "logo-4", description: "Logo 4", image: "/Logos/nvidia-logo.svg", className: "h-7 w-auto" },
    { id: "logo-5", description: "Logo 5", image: "/Logos/GBTS_Logo.webp", className: "h-7 w-auto" },
    { id: "logo-6", description: "Logo 6", image: "/Logos/La-Trobe.webp", className: "h-7 w-auto" },
    { id: "logo-7", description: "Logo 7", image: "/Logos/Shopify_logo.svg", className: "h-7 w-auto" },
    // { id: "logo-8", description: "Logo 8", image: "/Logos/smartsheet.webp", className: "h-7 w-auto" },
  ],
  className = ""
}: Logos3Props) => {
  return (
    <section className={`py-6 ${className}`}>      
      <div className="container px-5 lg:px-0 mx-auto flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h2>
      </div>

      {/* Always use grid so all logos are visible */}
      <div className="container px-5 mx-auto">
        <div
          className="grid gap-4 justify-items-center items-center"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          }}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="p-2">
              <img src={logo.image} alt={logo.description} className={logo.className} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
