// // "use client";

// // import React from "react";
// // import FooterLink from "#/src/components/footer-link";
// // import SnsLinks from "./sns-links";
// // import { footerLinks } from "#/src/constants/mock-data";

// // const Footer = () => {

// //   return (
// //     <footer className="px-10 mx-auto max-w-[85rem]">
// //         <SnsLinks />
// //         {/* <div>
// //             <FooterLink href={""}>Polygon PoS</FooterLink>
// //         </div> */}
// //         <div className="grid grid-cols-2 gap-4"> {/* Add a grid layout for better styling */}
// //         <div className="text-left">
// //             <h3>{footerLinks.solutions.title}</h3>
// //             <div>
// //                 {Object.entries(footerLinks.solutions).map(([key, title]) => (
// //                 key !== "title" && ( // Exclude the "title" field when mapping
// //                     <FooterLink key={key} href={`/${key}`}>
// //                     {title}
// //                     </FooterLink>
// //                 )
// //                 ))}
// //             </div>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// "use client";

// import React from "react";
// import FooterLink from "#/src/components/footer-link";
// import SnsLinks from "./sns-links";
// import { footerLinks } from "#/src/constants/mock-data"; // Adjust the import path as needed

// const Footer = () => {
//   return (
//     <footer className="px-10 mx-auto max-w-[85rem] py-10">
//       <SnsLinks />
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10"> {/* Adjust columns for responsiveness */}
//         {Object.entries(footerLinks).map(([categoryKey, category]) => (
//           <div key={categoryKey} className="flex flex-col text-center">
//             <h3 className="font-bold text-lg mb-4 text-white">{category.title}</h3>
//             <div className="space-y-2">
//               {Object.entries(category).map(([key, title]) =>
//                 key !== "title" && ( // Exclude the "title" field when mapping
//                   <FooterLink key={key} href={`/${key}`}>
//                     {title}
//                   </FooterLink>
//                 )
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React from "react";

import FooterLink from "#/src/components/footer-link";
import { footerLinks } from "#/src/constants/mock-data"; // Adjust the import path as needed

import SnsLinks from "./sns-links";

const Footer = () => (
    <footer className="text-sm pt-10">
      <SnsLinks />
      <div className="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4 mt-10 px-10 mx-auto max-w-[85rem] mb-24">
        {Object.entries(footerLinks).map(([categoryKey, category]) => (
          <div key={categoryKey} className="text-left">
            <h3 className="font-bold mb-4 text-white">{category.title}</h3>
            <div className="space-y-2">
              {Object.entries(category).map(
                ([key, title]) =>
                  key !== "title" && (
                    <FooterLink key={key} href={`/${key}`}>
                      {title}
                    </FooterLink>
                  ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t border-gray-500">
        <p className="px-10 mx-auto max-w-[85rem] text-gray-100 text-sm py-16">
          © 2024 Polygon Labs UI (Cayman) Ltd. | All rights reserved
        </p>
      </div>
    </footer>
  );

export default Footer;
