// const Footer2 = ({
//   menuItems = [
//     {
//       title: "Product",
//       links: [
//         { text: "Automated Proctoring", url: "#" },
//         { text: "Record and Review", url: "#" },
//         { text: "Live Proctoring", url: "#" },
//         { text: "ID Verification", url: "#" },
//       ],
//     },
//     {
//       title: "Solutions",
//       links: [
//         { text: "Training & Certifications", url: "#" },
//         { text: "Assessment Providers", url: "#" },
//         { text: "E-Learning", url: "#" },
//         { text: "Universities", url: "#" },
//       ],
//     },
//     {
//       title: "Company",
//       links: [
//         { text: "About Us", url: "#" },
//         { text: "Integrations", url: "#" },
//         { text: "FAQ", url: "#" },
//         { text: "Support", url: "#" },
//       ],
//     },
//     {
//       title: "Sales",
//       links: [
//         { text: "US/Canada: +1-510-254-3424", url: "tel:+15102543424" },
//         { text: "India: +91-80-4521-0929", url: "tel:+918045210929" },
//         { text: "Email: us@talview.com", url: "mailto:us@talview.com" },
//       ],
//     },
//   ],
//   copyright = "© 2025 Proview. All rights reserved.",
//   bottomLinks = [
//     { text: "Terms and Conditions", url: "#" },
//     { text: "Privacy Policy", url: "#" },
//   ],
// }: Footer2Props) => {
//   return (
//     <section className="relative bg-[#050e1d] text-gray-300 py-16 z-10 overflow-hidden">
//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="relative left-1/2 aspect-[1155/678] w-[30rem] -translate-x-1/2 rotate-[30deg] bg-[#1d4fd8] opacity-20 sm:w-[50rem]"
//         />
//       </div>

//       <div
//         aria-hidden="true"
//         className="absolute inset-x-0 bottom-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[30rem] -translate-x-1/2 bg-[#1d4fd8] opacity-20 sm:w-[50rem]"
//         />
//       </div>

//       <div className="container px-5 lg:px-0 mx-auto">
//         <footer>
//           <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b border-gray-600 pb-8 gap-6">
//             <div className="md:w-4/5 text-white text-2xl font-bold leading-tight">
//               <h4><span className="text-white">Ready to secure your assessments?</span></h4>
//               <h4><span className="text-white">Experience next-gen proctoring today.</span></h4>
//             </div>
//             <div className="md:w-1/4 flex justify-center md:justify-end">
//               <a
//                 href="#"
//                 className="bg-white text-[#133a59] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
//               >
//                 Get Started
//               </a>
//             </div>
//           </div>

//           <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
//             {menuItems.map((section, sectionIdx) => (
//               <div key={sectionIdx}>
//                 <div className="mb-4 font-bold text-white text-lg">{section.title}</div>
//                 <ul className="space-y-4">
//                   {section.links.map((link, linkIdx) => (
//                     <li key={linkIdx}>
//                       <a
//                         href={link.url}
//                         className="text-gray-200 hover:text-white transition-colors"
//                       >
//                         {link.text}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-600 pt-6 text-sm font-medium md:flex-row md:items-center">
//             <p className="!text-white">{copyright}</p>
//             <ul className="flex gap-4">
//               {bottomLinks.map((link, linkIdx) => (
//                 <li key={linkIdx}>
//                   <a
//                     href={link.url}
//                     className="underline text-gray-300 hover:text-white transition-colors"
//                   >
//                     {link.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </footer>
//       </div>
//     </section>
//   );
// };

// export { Footer2 };
