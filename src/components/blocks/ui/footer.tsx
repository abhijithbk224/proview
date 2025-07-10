
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Sales",
    links: [
      { name: `US/Canada: +1-510-254-3424`, href: "#" },
      { name: `India: +91-80-4521-0929`, href: "#" },
      { name: `Email :us@talview.com `, href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Automated Proctoring", href: "/automated-remote-proctoring" },
      { name: "Record and Review", href: "/record-and-review-proctoring" },
      { name: "Live Proctoring", href: "/live-proctoring" },
      { name: "ID Verification", href: "/id-verification" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Training and Certifications", href: "/certification-and-training-proctoring-solution" },
      { name: "Assessment Providers", href: "/proctoring-solution-for-assessment-providers" },
      { name: "E-Learning", href: "/proctoring-solution-for-e-learning-programs" },
      { name: "Universities", href: "/university-proctoring-solution" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "https://www.talview.com/en/about" },
      { name: "Integration", href: "https://www.talview.com/en/integrations" },
      { name: "FAQs", href: "https://www.talview.com/en/faq" },
      { name: "Support", href: "https://talview.freshdesk.com/support/home" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "https://www.talview.com/terms" },
  { name: "Privacy Policy", href: "https://www.talview.com/privacy" },
];

const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Talview. All Rights Reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-20 bg-gray-50">
      {/* <div className="container mx-auto px-4"> */}
      <div className="container mx-auto px-4 lg:pl-6 xl:pl-10 2xl:pl-16">
        {/* Mobile: no left padding; Desktop: add left padding */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 md:pl-8">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col items-center gap-4">
          <p className="text-sm text-gray-600">{copyright}</p>
          <div className="flex flex-nowrap gap-4">
            {legalLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer7;
