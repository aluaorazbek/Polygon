"use client";

import React, { PropsWithChildren, useState } from "react";

import { LinkProps } from "next/dist/client/link";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";

import ArrowIcon from "#/public/icon/arrow-right-up.svg";

type TProps = {
  color?: "default" | "purple" | "gradient";
} & PropsWithChildren<LinkProps>;

const ArrowLink = ({ color = "default", href, children }: TProps) => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    controls1.start({
      x: 10,
      y: -10,
      opacity: 0,
      transition: { type: "spring", stiffness: 900, damping: 35 },
    });
    controls2.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 900, damping: 35, delay: 0.05 },
    });
    if (color === "purple") {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    controls1.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 900, damping: 35, delay: 0.05 },
    });
    controls2.start({
      x: -10,
      y: 10,
      opacity: 0,
      transition: { type: "spring", stiffness: 900, damping: 35 },
    });
    if (color === "purple") {
      setIsHovered(false);
    }
  };

  const backgroundMapping = {
    default: "bg-gradient-btn-gray",
    purple: isHovered ? "bg-white text-black" : "bg-gradient-btn-purple",
    gradient: "bg-gradient-btn-green hover:bg-gradient-btn-green-hover",
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        "relative text-white p-2.5 pl-3.5 rounded-[3rem] flex items-center gap-1.5",
        backgroundMapping[color],
      )}
    >
      {children && <span className="text-sm font-medium">{children}</span>}
      <div className="relative w-6 h-6">
        <motion.div
          className="absolute w-6 h-6"
          initial={{ x: 0, y: 0 }}
          animate={controls1}
        >
          <ArrowIcon
            width={24}
            height={24}
            className={twMerge(
              color === "purple" && isHovered ? "text-black" : "text-white",
            )}
          />
        </motion.div>
        <motion.div
          className="absolute w-6 h-6"
          initial={{ x: -10, y: 10, opacity: 0 }}
          animate={controls2}
        >
          <ArrowIcon
            width={24}
            height={24}
            className={twMerge(
              color === "purple" && isHovered ? "text-black" : "text-white",
            )}
          />
        </motion.div>
      </div>
    </Link>
  );
};

export default ArrowLink;
