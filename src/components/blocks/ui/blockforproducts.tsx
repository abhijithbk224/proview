
import React from "react";

interface DataObject {
  icon: string;
  title: string;
  description: string;
}

interface Integration11Props {
  title?: string;
  data?: DataObject[];
}

const Integration11 = ({
  title,
  data = [],
}: Integration11Props) => {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {title && (
          <h2 className="mb-6 text-3xl font-bold text-[#1A3559] text-center">
            {title}
          </h2>
        )}

        <div className="flex flex-wrap justify-center gap-6">
          {data.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-center text-center
                rounded-xl border border-[#D6E6F5] bg-white
                p-6
                w-full sm:w-[300px] lg:w-[340px]
                min-h-[260px] sm:min-h-[280px] lg:min-h-[300px]
              "
            >
              <div className="mb-4 h-14 w-14 rounded-full bg-[#E6F0FA] flex items-center justify-center">
                <img
                  src={icon}
                  alt={title}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="text-lg font-bold text-[#1A3559]">
                {title}
              </div>
              <p className="mt-3 text-sm text-[#5A6B87] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Integration11 };
