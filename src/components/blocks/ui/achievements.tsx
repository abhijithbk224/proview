import React from "react";

interface AchievementsProps {
  heading?: string;
  imgurl?: string;
}

const Achievements = ({ 
  heading = 'Explore Our Highly Rated Solutions', 
  imgurl = 'https://proview.io/hubfs/G2-Logo%20(1).svg' 
}: AchievementsProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-700 text-center mb-12 leading-tight">
        {heading}
      </h1>
      <img 
        src={imgurl} 
        alt="Highly Rated Solutions" 
        className="w-full max-w-6xl h-24 md:h-32 lg:h-40 object-contain mx-auto"
      />
    </div>
  );
};

export { Achievements };