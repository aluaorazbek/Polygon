"use client";

import { useState } from "react";

import Image, { StaticImageData } from "next/image";

import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";

import ArrowIcon from "#/public/icon/arrow-right-up.svg";
import Img1 from "#/public/ui/features-1.webp";
import Img2 from "#/public/ui/features-2.png";
import Img3 from "#/public/ui/features-3.png";
import Img4 from "#/public/ui/features-4.webp";

interface IStatCardItem {
  title: string;
  subtitle: string;
  action: string;
  image: StaticImageData;
}

interface IStatCard {
  title: string;
  subtitle: string;
  action: string;
  image: StaticImageData;
  isHovered: boolean;
  onHover: () => void;
}

const stats: IStatCardItem[] = [
  {
    title: "Connect IRL",
    subtitle:
      "Meet up with our community at hackathons, conferences, and events worldwide.",
    action: "View Events",
    image: Img1,
  },
  {
    title: "Explore MATIC",
    subtitle:
      "MATIC is the currency of Polygon that enables users to interact with tens of thousands of dApps in our ecosystem.",
    action: "Learn More",
    image: Img2,
  },
  {
    title: "Govern",
    subtitle: "Participate in shaping Polygon protocols.",
    action: "Learn More",
    image: Img3,
  },
  {
    title: "Build on Polygon",
    subtitle:
      "Get to know our modular, flexible framework that provides solutions and supports building a variety of applications.",
    action: "Developer Docs",
    image: Img4,
  },
];

const StatCard = ({
  title,
  subtitle,
  image,
  action,
  isHovered,
  onHover,
}: IStatCard) => {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({
      x: -10,
      y: 20,
      opacity: 1,
    });
    onHover();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: -20,
      y: 30,
      opacity: 0,
    });
    onHover();
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative p-10 min-h-[32.5rem] rounded-xl flex flex-col justify-between",
        isHovered ? "bg-gradient-card-hover shadow-hover" : "bg-gradient-card",
      )}
    >
      <motion.div
        className="absolute right-0 top-0 w-10 h-10"
        initial={{ x: -20, y: 20, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <ArrowIcon width={32} height={32} className="text-white" />
      </motion.div>

      <Image
        src={image}
        alt="Image"
        style={{ backgroundColor: "inherit" }}
        className="max-w-[247px] max-h-[247px]"
      />
      <div className="font-medium">
        <h3 className="text-white text-[2rem] mb-1.5">{title}</h3>
        <p
          className={clsx(
            "text-gray-1100 text-sm mb-10",
            isHovered ? "text-white" : "text-gray-1100",
          )}
        >
          {subtitle}
        </p>
        <span
          className={clsx(
            "text-base",
            isHovered ? "text-purple-700" : "text-white",
          )}
        >
          {action}
        </span>
      </div>
    </div>
  );
};

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleHover = (index: string) => () => {
    setHoveredIndex(index === hoveredIndex ? null : index);
  };

  return (
    <section className="border-t border-gray-500 px-10 mobile:px-5">
      <div className="py-24 max-w-[72rem] m-auto">
        <h2 className="text-white font-medium text-6xl mb-16 leading-tight mobile:text-[2rem]">
          Time to roll up your sleeves
        </h2>
        <div className="grid grid-cols-2 gap-6 mobile:flex mobile:overflow-auto scrollbar-hide">
          {stats.map((stat, index) => (
            <div key={index}>
              <StatCard
                key={index}
                image={stat.image}
                title={stat.title}
                subtitle={stat.subtitle}
                action={stat.action}
                isHovered={hoveredIndex === `${index}`}
                onHover={handleHover(`${index}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
