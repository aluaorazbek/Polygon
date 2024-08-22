"use client";

import React from "react";

import { footerLinks } from "#/constants/mock-data"; // Adjust the import path as needed

import ProjectLink from "#/views/footer/project-link";

import SnsLinks from "./sns-links";

const Footer = () => (
  <footer className="text-sm pt-10">
    <SnsLinks />
    <div className="grid grid-cols-5 mobile:grid-cols-2 gap-x-6 gap-y-4 mobile:gap-y-8 mt-10 px-10 mx-auto max-w-[85rem] mb-24 mobile:px-5">
      {Object.entries(footerLinks).map(([categoryKey, category]) => (
        <div key={categoryKey} className="text-left">
          <h3 className="font-bold mb-4 text-white">{category.title}</h3>
          <div className="space-y-2">
            {Object.entries(category).map(
              ([key, title]) =>
                key !== "title" && (
                  <ProjectLink key={key} href={`/${key}`}>
                    {title}
                  </ProjectLink>
                ),
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="w-full border-t border-gray-500">
      <p className="px-10 mx-auto max-w-[85rem] text-gray-100 text-sm py-16 mobile:text-center mobile:p-6">
        © 2024 Polygon Labs UI (Cayman) Ltd. | All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
