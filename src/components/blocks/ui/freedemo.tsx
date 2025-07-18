import { Button } from "@/components/blocks/ui/button";

interface Cta11Props {
  heading: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Cta11 = ({
  heading = "Call to Action",
  description,
  buttons = {
    primary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Learn More",
      url: "https://www.shadcnblocks.com",
    },
  },
}: Cta11Props) => {
  return (
   
  <section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto w-full max-w-4xl">
    <div className="flex flex-col items-center rounded-lg p-6 text-center sm:p-10 md:rounded-xl lg:p-16" style={{ backgroundColor: '#133A59' }}>
      <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6" style={{ color: '#F7F9FC' }}>
        {heading}
      </h3>
      {description && (
        <p className="mb-8 max-w-3xl lg:text-lg" style={{ color: '#F7F9FC', opacity: '0.8' }}>
          {description}
        </p>
      )}
      <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
        {buttons?.secondary && (
          <Button 
            variant="outline" 
            className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#133A59]" 
            asChild
          >
            <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
          </Button>
        )}
        {buttons?.primary && (
          <Button 
            className="w-full sm:w-auto" 
            style={{ backgroundColor: '#FFFFFF', color: '#133A59' }}
            asChild
          >
            <a href={buttons.primary.url}>{buttons.primary.text}</a>
          </Button>
        )}
      </div>
    </div>
  </div>
</section>
  );
};

export { Cta11 };
