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
        "Comprehensive remote proctoring solution enabling simultaneous administration of multiple exams, ranging from low to high stakes with expert invigilators.",
      icon: <Scaling />,
    },
    {
      title: "Real-Time ID Verification",
      description:
        "Authenticate candidate identity in real-time using advanced face-matching technology to prevent impersonation and fraud during exams.",
      icon: <IdCard />,
    },
    {
      title: "Secondary Camera Monitoring",
      description:
        "All Proview proctoring solutions use a secondary camera, which gives a wider view of the candidate's surroundings and creates a secure exam environment.",
      icon: <Camera />,
    },
    {
      title: "Safeguard Data for Compliance",
      description:
        "Our scalable proctoring platform enables you to easily conduct secure online tests for individuals worldwide.",
      icon: <ShieldCheck />,
    },
    {
      title: "Easily Integrate with Test Engines and LMSs",
      description: 
        "Enhance your LMS, test engine, or enrollment tool by adding proctoring functionality with our smooth plug-and-play capabilities.",
      icon: <Blocks />,
    },
    {
      title: "Partner with a World-Class Support and Services Team",
      description: 
        "Experience a seamless implementation process and attain key business results with Proview's award-winning services and support teams",
      icon: <Headset />,
    },
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto relative z-10">
      <div className="container px-5 lg:px-0 mx-auto text-center">
        <h2 className="my-6 lg:my-12 mt-0 text-2xl font-semibold text-balance lg:text-4xl leading-tight">
          Key Benefits
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const featureTitleClasses =
  "mb-3 text-lg font-bold md:mb-4 md:text-1xl <lg:mb-4></lg:mb-4> text-[#133a59] dark:text-neutral-100";
const featureDescriptionClasses = "mb-6 lg:text-base text-[#2c2c2c] dark:text-neutral-300";

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1d4fd8] text-white ml-10 mb-5">
        {icon}
      </div>

      <div className={cn("relative z-10 px-10", featureTitleClasses)}>
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className={cn("max-w-xl relative z-10 px-10", featureDescriptionClasses)}>
        {description}
      </p>
    </div>
  );
};
