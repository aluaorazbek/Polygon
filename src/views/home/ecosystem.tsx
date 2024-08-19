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
  ],
  [
    { title: "219.11M+", subtitle: "Unique Addresses" },
    { title: "~$0.015", subtitle: "Avg. Cost per txn" },
  ],
  [
    { title: "2.44B+", subtitle: "Transactions" },
    { title: "1.17M+", subtitle: "Deployed Smart Contracts" },
  ],
];

const StatCard = ({ title, subtitle, isHovered, onHover }: IStatCard) => (
  <motion.div
    onMouseEnter={onHover}
    onMouseLeave={onHover}
    className={clsx(
      "p-10 h-[450px] rounded-xl flex items-end",
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
      <h3 className="text-white text-6xl mb-1.5">{title}</h3>
      <p className="text-gray-1100 text-2xl">{subtitle}</p>
    </motion.div>
  </motion.div>
);

const Ecosystem = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleHover = (index: string) => () => {
    setHoveredIndex(index === hoveredIndex ? null : index);
  };

  return (
    <section className="border-t border-gray-500">
      <div className="py-24 max-w-[72rem] m-auto">
        <h2 className="text-white font-medium text-6xl mb-16 leading-tight tablet:text-xl">
          The largest and <br /> most thriving ecosystem
        </h2>
        <div className="flex gap-6">
          {stats.map((column, colIndex) => (
            <div
              key={colIndex}
              className={clsx(
                "flex flex-col gap-6 w-1/3",
                colIndex === 1 && "mt-[8rem]",
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
