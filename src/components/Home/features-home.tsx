
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
      image: "/Home/Higher-education.webp",
      linkUrl: "/university-proctoring-solution",
    },
    {
      id: "feature-2",
      title: "Professional Education",
      description:
        "Ensure the integrity of your certification exams with multiple layers of authentication, fraud detection, and a lock-down exam browser that disables access to unauthorized apps, websites, and keyboard shortcuts.",
      image: "/Home/Professional-Education.webp",
      linkUrl: "/certification-and-training-proctoring-solution",
    },
  ],
}: Feature72Props) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group ${
                index === 0 
                  ? 'md:translate-x-4 lg:translate-x-6' 
                  : 'md:translate-x-4 lg:translate-x-6'
              }`}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-md">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <a
                  href={feature.linkUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-base group-hover:underline transition-colors duration-200"
                >
                  {feature.linkText || "Learn More"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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