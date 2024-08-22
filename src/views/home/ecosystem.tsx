"use client";

import { useState } from "react";

import clsx from "clsx";
import { motion } from "framer-motion";

interface IStatCardItem {
  title: string;
  subtitle: string;
}

interface IStatCard {
  title: string;
  subtitle: string;
  isHovered: boolean;
  onHover: () => void;
}

const stats: IStatCardItem[][] = [
  [
    { title: "28K+", subtitle: "Total Contract Creators" },
    { title: "12.80B+", subtitle: "NFT Sales Volume" },
    { title: "12.80B+", subtitle: "NFT Sales Volume" },
  ],
  [
    { title: "219.11M+", subtitle: "Unique Addresses" },
    { title: "~$0.015", subtitle: "Avg. Cost per txn" },
    { title: "44.8M+", subtitle: "Unique Addresses" },
  ],
  [
    { title: "2.44B+", subtitle: "Transactions" },
    { title: "1.17M+", subtitle: "Deployed Smart Contracts" },
    { title: "37.2M+", subtitle: "NFT Sales Volume" },
  ],
];

const StatCard = ({ title, subtitle, isHovered, onHover }: IStatCard) => (
  <motion.div
    onMouseEnter={onHover}
    onMouseLeave={onHover}
    className={clsx(
      "p-10 h-[450px] rounded-xl flex items-end mobile:h-[200px] mobile:p-3",
      isHovered
        ? "bg-purple-800 shadow-card"
        : "bg-gradient-card border border-gray-700",
    )}
    initial={{ y: 0 }}
    animate={{ y: isHovered ? -5 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="font-medium"
      initial={{ y: 0 }}
      animate={{ y: isHovered ? -10 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-white text-6xl mb-1.5 mobile:text-[2rem]">{title}</h3>
      <p className="text-gray-1100 text-2xl mobile:text-base">{subtitle}</p>
    </motion.div>
  </motion.div>
);

const Ecosystem = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleHover = (index: string) => () => {
    setHoveredIndex(index === hoveredIndex ? null : index);
  };

  return (
    <section className="border-t border-gray-500 px-10 mobile:px-5">
      <div className="py-24 max-w-[72rem] m-auto mobile:py-10">
        <h2 className="text-white font-medium text-6xl mb-16 leading-tight mobile:text-[2rem] mobile:mb-6">
          The largest and <br className="mobile:hidden" /> most thriving
          ecosystem
        </h2>
        <div className="flex gap-6 tablet:justify-center mobile:justify-between">
          {stats.map((column, colIndex) => (
            <div
              key={colIndex}
              className={clsx(
                "flex flex-col gap-6 w-1/3 tablet:w-[45%]",
                colIndex === 1 && "mt-[8rem] mobile:mt-10",
                colIndex === 2 && "tablet:hidden",
              )}
            >
              {column.map((stat, index) => (
                <StatCard
                  key={index}
                  title={stat.title}
                  subtitle={stat.subtitle}
                  isHovered={hoveredIndex === `${colIndex}-${index}`}
                  onHover={handleHover(`${colIndex}-${index}`)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
