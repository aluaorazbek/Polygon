import { useState } from "react";

import Link from "next/link";

import ArrowIcon from "#/public/icon/arrow-right-up.svg";
import XMark from "#/public/icon/xmark.svg";
import IconImg from "#/public/ui/coin.svg";

export const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="w-full h-11 bg-purple-200 flex text-white items-center justify-between">
        <div className="flex items-center justify-center mx-auto">
          <IconImg className="text-white mr-2" />
          <div className="flex items-center text-sm font-medium">
            <span>35M in MATIC Grants - Applications Now Open •</span>
            <Link
              href="https://polygon.technology/"
              className="font-semibold ml-1.5 hover:underline"
            >
              Apply Now
            </Link>
            <ArrowIcon width={24} height={24} className="text-white" />
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Close notification"
          className="mr-4"
        >
          <XMark width={24} height={24} className="text-white cursor-pointer" />
        </button>
      </div>
    )
  );
};
