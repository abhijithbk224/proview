
import React from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Card: React.FC<CardProps> = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border-none bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ className = "", children, ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter: React.FC<CardProps> = ({ className = "", children, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Testimonial4 = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-10">
        
          <Card className="overflow-hidden" style={{ backgroundColor: "#F6FBFF" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        
               <div className="h-48 lg:h-full flex items-center justify-center bg-[#F6FBFF]">
             <img
             src="/Logos/Gallagher-Bassett-copy.webp"
               alt="Talview testimonial"
               className="w-full h-full object-contain md:max-w-[200px] lg:max-w-[240px]"
                       />
                  </div>


              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <q className="text-base sm:text-lg leading-relaxed text-foreground/80">
                  Talview has been an essential part of our online learning product and have helped us to ensure that we meet and exceed our governance requirements. Talview has been a partner throughout online learning development and can't recommend them enough
                </q>
              </div>
            </div>
          </Card>
   

        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
            <Card className="overflow-hidden" style={{ backgroundColor: "#F6FBFF" }}>
              <div className="grid grid-cols-1 lg:grid-cols-5 h-full items-center">
                <div className="lg:col-span-2 h-40 lg:h-full flex items-center justify-center p-4">
                  <img 
                    src="/Logos/TBDHU_Horizontal_K_0_0_0.png"
                    alt="Customer testimonial"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="lg:col-span-3 flex flex-col justify-center p-6">
                  <q className="text-base sm:text-lg leading-relaxed text-foreground/80">
                    People are really using this opportunity at home to get certified in a variety of things. So, we've been very positively impacted by using Talview [proctoring solution] and we're very happy with the service
                  </q>
                </div>
              </div>
            </Card>

           
            <Card className="overflow-hidden" style={{ backgroundColor: "#F6FBFF" }}>
              <div className="grid grid-cols-1 lg:grid-cols-5 h-full items-center">
                <div className="lg:col-span-2 h-40 lg:h-full flex items-center justify-center p-4">
                  <img 
                    src="/Logos/AAAE-logo-full-2024.webp"
                    alt="Remote proctoring partner"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="lg:col-span-3 flex flex-col justify-center p-6">
                  <q className="text-base sm:text-lg leading-relaxed text-foreground/80">
                    We work hand in hand with Talview to enhance our Remote Proctoring capabilities and to improve our customer test taking journey
                  </q>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial4 };
