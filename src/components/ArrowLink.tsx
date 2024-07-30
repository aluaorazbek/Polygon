import React, { LinkHTMLAttributes, useState } from "react";

import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";

import ArrowIcon from "#/public/icon/arrow-right-up.svg";

type TProps = {
  link?: string;
  label?: string;
  color?: "default" | "purple" | "gradient";
} & LinkHTMLAttributes<HTMLLinkElement>;

const ArrowLink = ({ label, color = "default", link = "#" }: TProps) => {
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
    purple: "bg-gradient-btn-purple hover:bg-white",
    gradient: "bg-gradient-btn-green",
  };

  const hoverMapping = {
    default: "",
    purple: isHovered ? "bg-white text-black" : "",
    gradient: "hover:bg-gradient-btn-green-hover",
  };

  return (
    <Link
      href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={twMerge(
        "inline-block items-center relative text-white p-2.5 pl-3.5 rounded-[3rem]",
        backgroundMapping[color],
        hoverMapping[color],
      )}
    >
      <div className="flex items-center gap-1.5">
        {label && <span className="text-sm font-medium">{label}</span>}
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
      </div>
    </Link>
  );
};

export default ArrowLink;
