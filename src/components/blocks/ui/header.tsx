
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/blocks/ui/accordion";
import { Button } from "@/components/blocks/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/blocks/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  items?: MenuItem[];
}

interface Navbar3Props {
  logo?: { url: string; src: string; alt: string };
  menu?: MenuItem[];
  mobileExtraLinks?: { name: string; url: string }[];
  auth?: {
    login: { text: string; url: string };
    signup: { text: string; url: string };
  };
}

const Navbar3 = ({
  logo = {
    url: "https://www.proview.io",
    src: "https://proview.io/hubfs/proview.svg",
    alt: "proview logo",
  },
  menu = [
    {
      title: "Products",
      url: "#",
      items: [
        { title: "Automated Proctoring", url: "/automated-remote-proctoring" },
        { title: "Record and Review", url: "/record-and-review-proctoring" },
        { title: "Live Proctoring", url: "/live-proctoring" },
        { title: "ID Verification", url: "/id-verification" },
      ],
    },
    {
      title: "Solutions",
      url: "#",
      items: [
        { title: "Training & Certifications", url: "/certification-and-training-proctoring-solution" },
        { title: "Assessment Providers", url: "/proctoring-solution-for-assessment-providers" },
        { title: "E-Learning", url: "/proctoring-solution-for-e-learning-programs" },
        { title: "Universities", url: "/university-proctoring-solution" },
      ],
    },
    { title: "Integrations", url: "https://www.talview.com/en/integrations" },
    { title: "Contact Us", url: "https://www.talview.com/contact" },
  ],
  mobileExtraLinks = [],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Get started", url: "https://www.talview.com/request-a-demo" },
  },
}: Navbar3Props) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => setActiveDropdown(title);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <header className="w-full bg-white relative z-50">
      <div className="container mx-auto px-5 lg:px-0 flex h-20 items-center justify-between">
        {/* Logo */}
        <a href={logo.url} className="flex items-center ml-6 lg:ml-12">
          <img src={logo.src} className="h-12" alt={logo.alt} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12 mr-6 lg:mr-12">
          {menu.map(item =>
            item.items ? (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="inline-flex items-center gap-1 text-[#133a59] hover:text-[#133a59] py-2">
                  <span>{item.title}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-0 top-full mt-2 w-48 sm:w-56 md:w-64 bg-white rounded-lg border border-gray-200 shadow-lg transition-all duration-200 z-50 ${
                    activeDropdown === item.title
                      ? 'opacity-100 visible transform translate-y-0'
                      : 'opacity-0 invisible transform -translate-y-2'
                  }`}
                >
                  <ul className="flex flex-col py-2">
                    {item.items.map((sub, i) => (
                      <li
                        key={sub.title}
                        className={`${
                          i === (item.items?.length ?? 0) - 1 ? "border-b-0" : ""
                        }`}
                      >
                        <a
                          href={sub.url}
                          className="block px-4 py-3 text-[#133a59] hover:bg-gray-100 transition-colors duration-150 !opacity-100"
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={item.title}
                href={item.url}
                className="text-[#133a59] hover:text-[#133a59] transition-colors duration-150"
              >
                {item.title}
              </a>
            )
          )}
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href={auth.signup.url}>{auth.signup.text}</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-white">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url}>
                    <img src={logo.src} className="h-8" alt={logo.alt} />
                  </a>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {menu.map(item =>
                    item.items ? (
                      <AccordionItem key={item.title} value={item.title}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 pb-2">
                            {item.items.map(sub => (
                              <a
                                key={sub.title}
                                href={sub.url}
                                className="block py-2 text-[#133a59] hover:text-[#133a59] !opacity-100"
                              >
                                {sub.title}
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div key={item.title} className="py-3">
                        <a
                          href={item.url}
                          className="block text-[#133a59] hover:text-[#133a59] !opacity-100"
                        >
                          {item.title}
                        </a>
                      </div>
                    )
                  )}
                </Accordion>

                {mobileExtraLinks.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {mobileExtraLinks.map(link => (
                      <a
                        key={link.url}
                        href={link.url}
                        className="px-4 py-2 text-center bg-gray-100 rounded hover:bg-gray-200 transition-colors duration-150"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href={auth.signup.url}>{auth.signup.text}</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export { Navbar3 };