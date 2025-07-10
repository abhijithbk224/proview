
import React from "react";

interface Feature1Props {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary: {
    label: string;
    href: string;
  };
  buttonSecondary: {
    label: string;
    href: string;
  };
}

const Feature1 = ({
  title = "Seamlessly Integrate with Top LMS Platforms",
  imageSrc = "/Integrations_proview.webp",
  imageAlt = "placeholder hero",
}: Feature1Props) => {
  return (
    <section className="py-8">
      <div className="container px-5 lg:px-13 mx-auto text-center">
        <h2 className="my-12 mt-0 text-2xl font-semibold text-balance lg:text-4xl leading-tight">
          {title}
        </h2>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-96 w-full rounded-md object-cover mx-auto"
        />
      </div>
    </section>
  );
};

export { Feature1 };