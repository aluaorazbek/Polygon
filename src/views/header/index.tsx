"use client";

import React, { useState } from "react";

import Link from "next/link";

import clsx from "clsx";

import DiscordLogo from "#/public/logo/discord.svg";
import PolygonLogo from "#/public/logo/polygon.svg";
import XLogo from "#/public/logo/x.svg";

import { headerTitleList } from "#/src/constants/mock-data";

import { DevelopersHeader } from "./developers";
import { SolutionsHeader } from "./solutions";
import { StickyBar } from "./sticky-bar";

const Header = () => {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);

  const onMouseEnter = (index: number, el: HTMLElement) => {
    setHovering(index);
    setPopoverLeft(el.offsetLeft - 50);
  };

  return (
    <header className="relative z-50">
      <StickyBar />
      <div className="flex items-center justify-between mx-auto max-w-[85rem] px-10">
        <PolygonLogo width={143} height={25} className="mr-6" />
        <div className="flex items-center justify-between w-full">
          <nav
            onMouseLeave={() => setHovering(null)}
            className="flex flex-grow-0 flex-shrink-0 basis-auto justify-center gap-2"
          >
            {headerTitleList.map((item, index) => (
              <div className="py-6 ">
                <Link
                  key={index}
                  href="https://polygon.technology/"
                  onMouseEnter={(event) => {
                    onMouseEnter(index, event.currentTarget);
                  }}
                  className="text-white py-2 px-3 font-medium text-sm rounded-[2.75rem] hover:bg-gray-900 hover:outline hover:outline-1 hover:outline-gray-1000"
                >
                  {item}
                </Link>
              </div>
            ))}
            {typeof hovering === "number" && (
              <div
                style={{ left: popoverLeft ?? 0 }}
                className="w-fit absolute shadow top-[115px] bg-white"
              >
                <div
                  className={clsx(
                    "absolute transition-opaicty",
                    hovering === 0 ? "opacity-100" : "opacity-0",
                  )}
                >
                  <SolutionsHeader />
                </div>
                <div
                  className={clsx(
                    "absolute transition-opaicty",
                    hovering === 1 ? "opacity-100" : "opacity-0",
                  )}
                >
                  <DevelopersHeader />
                </div>
              </div>
            )}
          </nav>
          <div className="flex gap-4 items-center">
            <div className="flex gap-4 items-center">
              <Link
                className="flex items-center justify-center w-[2.1875rem] h-[2.1875rem] rounded-full hover:bg-gray-900 hover:outline hover:outline-1 hover:outline-gray-1000"
                href="https://polygon.technology/"
              >
                <XLogo className="text-white" />
              </Link>
              <Link
                className="flex items-center justify-center w-[2.1875rem] h-[2.1875rem] rounded-full hover:bg-gray-900 hover:outline hover:outline-1 hover:outline-gray-1000"
                href="https://polygon.technology/"
              >
                <DiscordLogo className="text-white" />
              </Link>
            </div>
            <button
              type="button"
              className="text-white bg-purple-100 py-2 px-3 font-medium text-xs rounded-[3rem] hover:text-black hover:bg-white cursor-pointer"
            >
              Polygon Docs
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
