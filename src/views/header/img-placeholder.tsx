import React from "react";

import Link from "next/link";

import SolutionsImgIcon from "#/public/ui/header-solutions-1.svg";
import SolutionsImg from "#/public/ui/header-solutions.svg";

// type TProps = {
//   title: string;
//   desc: string;
//   imgMain: React.ReactNode;
//   imgIcon: React.ReactNode;
//   link: string;
// };

const HeaderImgPlaceholder = () => (
  <div className="bg-gray-200 border border-gray-1000 rounded-lg hover:bg-gray-600 ">
    <Link
      href="https://polygon.technology/"
      className=" rounded-lg overflow-hidden"
    >
      <SolutionsImg height={136} className="rounded-t-lg" />
      <div className="flex gap-4 rounded-lg p-3">
        <div>
          <SolutionsImgIcon height={48} width={48} />
        </div>
        <div className="text-white">
          <h3 className="font-semibold">AggLayer</h3>
          <p className="font-medium">
            The trustless, cross-chain interoperability protocol
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default HeaderImgPlaceholder;
