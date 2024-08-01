import React, { PropsWithChildren } from "react";

import Link, { LinkProps } from "next/link";

type TProps = {
  img: React.ReactNode;
  desc: string;
} & PropsWithChildren<LinkProps>;

const HeaderLink = ({ img, desc, href, children }: TProps) => (
  <Link href={href} className="flex gap-4 rounded-lg p-3 hover:bg-gray-200">
    <div>{img}</div>
    <div className="text-white">
      <h3 className="font-semibold">{children}</h3>
      <p className="font-medium">{desc}</p>
    </div>
  </Link>
);

export default HeaderLink;
