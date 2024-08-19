import React, { PropsWithChildren, useState } from "react";

import { LinkProps } from "next/dist/client/link";
import Link from "next/link";

import { motion } from "framer-motion";

import ChevronIcon from "#/public/icon/chevron-left.svg";

const ProjectLink = ({ href, children }: PropsWithChildren<LinkProps>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="flex items-center py-1 text-gray-100 hover:text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children && <span className="text-sm font-medium">{children}</span>}
      <motion.div
        className=""
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? -2 : -10 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronIcon width={16} height={16} className="rotate-180" />
      </motion.div>
    </Link>
  );
};

export default ProjectLink;
