import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/blocks/ui/accordion";
import { Button } from "@/components/blocks/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/blocks/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/blocks/ui/sheet";
import type { JSX } from "react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
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
        {
          title: "Automated Proctoring",
          description: "Secondary Camera-Assisted Automated Proctoring",
          icon: <Book className="size-5 shrink-0" />,
          url: "/automated-remote-proctoring",
        },
        {
          title: "Record and Review",
          description: "Securing online assessments with post-session review",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/record-and-review-proctoring",
        },
        {
          title: "Live Proctoring",
          description: "Cheat-free exam environment with expert live proctors",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/live-proctoring",
        },
        {
          title: "ID Verification",
          description: "Boost exam security with face-ID verification",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/id-verification",
        },
      ],
    },
    {
      title: "Solutions",
      url: "#",
      items: [
        {
          title: "Training & Certifications",
          description: "Increase engagement & credibility in training & certification",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/certification-and-training-proctoring-solution",
        },
        {
          title: "Assessment Providers",
          description: "Proctoring platform for secure exams & seamless assessments.",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/proctoring-solution-for-assessment-providers",
        },
        {
          title: "E-Learning",
          description: "Secure e-learning exams with our proctoring software",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/proctoring-solution-for-e-learning-programs",
        },
        {
          title: "Universities",
          description: "Seamless experience for exam administrators & students",
          icon: <Book className="size-5 shrink-0" />,
          url: "/university-proctoring-solution",
        },
      ],
    },
    {
      title: "Integrations",
      url: "https://www.talview.com/en/integrations",
    },
    {
      title: "Contact Us",
      url: "https://www.talview.com/contact",
    },
  ],
  mobileExtraLinks = [],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Try for Free", url: "#" },
  },
}: Navbar1Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 w-full z-50 duration-300 ${
        scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
      } py-4`}
    >
      <div className="container px-5 lg:px-0 mx-auto">
        <nav className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-22">
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className={`w-40 transition-all duration-300 ${
                  scrolled ? "" : "filter brightness-0 invert"
                }`}
                alt={logo.alt}
              />
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, scrolled))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              asChild
              size="lg"
              className={`transition-colors duration-300 ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-600 hover:bg-gray-100"
              }`}
            >
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className={`w-40 transition-all duration-300 ${
                  scrolled ? "" : "filter brightness-0 invert"
                }`}
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="w-8 filter brightness-0 invert"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
                      <a href={auth.signup.url}>{auth.signup.text}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};
const renderMenuItem = (item: MenuItem, scrolled: boolean) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-base">
      <NavigationMenuTrigger scrolled={scrolled}>
      {item.title}
      </NavigationMenuTrigger>        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <a
                    className={`flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none ${
                      scrolled
                        ? "hover:bg-muted hover:text-accent-foreground"
                        : "hover:bg-white/10 hover:text-white"
                    }`}
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium ${
        scrolled
          ? "hover:bg-muted hover:text-accent-foreground"
          : "hover:bg-white/10 hover:text-white"
      }`}
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none hover:bg-white/10 hover:text-white text-base"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold">
      {item.title}
    </a>
  );
};

export { Navbar1 };
