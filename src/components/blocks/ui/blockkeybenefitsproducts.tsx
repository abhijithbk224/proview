
// import React from "react";

// interface DataObject {
//   icon: string;
//   title: string;
//   description: string;
// }

// interface Integration11Props {
//   title?: string;
//   data?: DataObject[];
// }

// const Integration12 = ({
//   title,
//   data = [],
// }: Integration11Props) => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
//         {title && (
//           <h2 className="mb-6 text-3xl font-bold text-[#1A3559] text-center">
//             {title}
//           </h2>
//         )}

//         <div className="flex flex-wrap justify-center gap-6">
//           {data.map(({ icon, title, description }, index) => (
//             <div
//               key={index}
//               className="
//                 flex flex-col items-center justify-center text-center
//                 rounded-xl border border-[#D6E6F5] bg-white
//                 p-5
//                 w-full sm:w-[280px] lg:w-[300px]
//                 min-h-[220px] sm:min-h-[240px] lg:min-h-[260px]
//               "
//             >
//               <div className="mb-3 h-12 w-12 rounded-full bg-[#E6F0FA] flex items-center justify-center">
//                 <img
//                   src={icon}
//                   alt={title}
//                   className="h-8 w-8 object-contain"
//                 />
//               </div>
//               <div className="text-lg font-bold text-[#1A3559]">
//                 {title}
//               </div>
//               <p className="mt-2 text-sm text-[#5A6B87] leading-relaxed">
//                 {description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export { Integration12 };
import React from "react";

interface DataObject {
  icon: string;
  title: string;
  description: string;
}

interface Integration12Props {
  title?: string;
  data?: DataObject[];

}

const Integration12 = ({
  title,
  data = [],
}: Integration12Props) => {
  return (
       <section className="py-12 bg-[#F5FAFF]">
  <div className="mx-auto px-2 sm:px-4 lg:px-8 max-w-screen-xl">
    {title && (
      <h2 className="mb-6 text-3xl font-semibold text-[#133A59] text-center">
        {title}
      </h2>
    )}

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-3 sm:pl-5 lg:pl-8">
      {data.map(({ icon, title, description }, index) => (
        <div
          key={index}
          className="
            flex w-full flex-col items-start rounded-xl border bg-white p-6
            shadow-sm transition hover:shadow-md
            min-h-[320px]      /* Increased card height */
          "
        >
          <img
            src={icon}
            alt={title}
            className="mb-4 h-16 w-16 object-contain"
          />
          <div className="text-2xl font-semibold text-[#133A59] pt-2 pl-1">
            {title}
          </div>
          <p className="mt-4 text-[#133A59] text-sm leading-relaxed pl-1">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    );
};

export { Integration12 };
