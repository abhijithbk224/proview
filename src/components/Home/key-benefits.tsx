
import { cn } from "@/lib/utils";
import {
  Scaling,
  IdCard,
  Camera,
  ShieldCheck,
  Blocks,
  Headset,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Expand and Scale Your Proctored Exams Online",
      description:
        "Comprehensive remote proctoring solution enabling simultaneous administration of multiple exams, from low- to high-stakes, with expert invigilators.",
      icon: <Scaling />,
    },
    {
      title: "Real‑Time ID Verification",
      description:
        "Authenticate candidate identity on the fly with advanced face‑matching technology to prevent impersonation and fraud.",
      icon: <IdCard />,
    },
    {
      title: "Secondary Camera Monitoring",
      description:
        "Use an extra camera to give invigilators a wider view of the test‑taker’s environment and ensure a secure exam setting.",
      icon: <Camera />,
    },
    {
      title: "Safeguard Data for Compliance",
      description:
        "Our platform is fully GDPR‑ and ISO‑compliant, so you can rest easy knowing candidate data is safe and secure.",
      icon: <ShieldCheck />,
    },
    {
      title: "Seamless LMS & Test Engine Integration",
      description:
        "Add proctoring to your LMS, test engine, or enrollment tool in minutes with our plug‑and‑play SDKs and APIs.",
      icon: <Blocks />,
    },
    {
      title: "World‑Class Support & Services",
      description:
        "Get up and running fast with our award‑winning onboarding team, and enjoy 24/7 support from experienced proctoring experts.",
      icon: <Headset />,
    },
  ];

  return (
    <section className="py-10 relative z-10 bg-white dark:bg-black">
      {/* reduced side padding to expand cards left/right */}
      <div className="px-4 sm:px-8 lg:px-12">
        {/* bumped max width for a wider grid */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="my-6 lg:my-12 text-2xl font-semibold text-balance lg:text-4xl leading-tight">
            Key Benefits
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const featureDescriptionClasses =
  "mb-6 text-[#2c2c2c] dark:text-neutral-300 lg:text-base";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function Feature({ title, description, icon, index }: FeatureProps) {
  return (
    <div
      className={cn(
        "flex flex-col border dark:border-neutral-800 rounded-lg p-6 relative group overflow-hidden",
        index < 3 && "border-b",
        index % 3 !== 0 && "border-l"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none",
          index < 3
            ? "bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent"
            : "bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent"
        )}
      />

      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1d4fd8] text-white mb-4">
        {icon}
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
          <div className="h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-200 group-hover:bg-blue-500" />
          <h3 className="ml-3 text-base font-bold transition-transform duration-200 group-hover:translate-x-2 dark:text-neutral-100">
            {title}
          </h3>
        </div>
        <p className={featureDescriptionClasses}>{description}</p>
      </div>
    </div>
  );
}
