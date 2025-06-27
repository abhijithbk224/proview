import { ArrowRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  linkUrl: string;
  linkText?: string;
}

interface Feature72Props {
  heading?: string;
  features?: Feature[];
}

const Feature72 = ({
  heading = "Proview's Remote Proctoring is Ideal For",
  features = [
    {
      id: "feature-1",
      title: "Higher Education",
      description:
        "Ensure exam authenticity for large student groups with AI-driven proctoring featuring secondary camera. Employ multiple authentication and fraud detection layers to create a secure exam environment.",
      image: "http://proview.io/hs-fs/hubfs/Higher%20education.webp?width=1200&height=640&name=Higher%20education.webp",
      linkUrl: "https://www.shadcnblocks.com/feature1",
    },
    {
      id: "feature-2",
      title: "Professional Education",
      description:
        "Ensure the integrity of your certification exams with multiple layers of authentication, fraud detection, and a lock-down exam browser that disables access to unauthorized apps, websites, and keyboard shortcuts.",
      image: "https://proview.io/hs-fs/hubfs/Professional%20Education.webp?width=1200&height=640&name=Professional%20Education.webp ",
      linkUrl: "https://www.shadcnblocks.com/feature2",
    },
  ],
}: Feature72Props) => {
  return (
    <section className="py-16 md:py-26">
      <div className="container flex flex-col gap-8 lg:px-0 px-5 mx-auto">
        <div className="text-center">
          <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative flex flex-col overflow-clip rounded-xl border border-border "
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none transition-opacity duration-300 rounded-xl" />

              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-video h-full w-full object-cover object-center rounded-t-xl"
                />
              </div>
              <div className="relative z-10 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                {/* Title with Hover Bar */}
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 relative inline-block pl-6 group-hover:pl-8 transition-all duration-300">
                  {/* Vertical bar: absolute positioned on left */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition-colors duration-300 origin-center"
                  />
                  {/* Title text */}
                  <span className="relative group-hover:translate-x-2 transition-transform duration-300">
                    {feature.title}
                  </span>
                </h3>

                <p className="mb-6 text-muted-foreground lg:text-lg">{feature.description}</p>
                <a
                  href={feature.linkUrl}
                  className="group inline-flex items-center text-base font-medium text-[#1d4fd8] hover:underline"
                >
                  {feature.linkText || "Learn More"}
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature72 };
