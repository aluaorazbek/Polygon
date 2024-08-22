"use client";

import { useState } from "react";

import Link from "next/link";

import clsx from "clsx";
import { motion } from "framer-motion";

import ArrowRightIcon from "#/public/icon/arrow-right.svg";
import BgImgLeft from "#/public/ui/bg-1.svg";
import BgImgRight from "#/public/ui/bg-2.svg";

import { IAggregatedList, aggregatedList } from "#/constants/mock-data";

const WebAggregated = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full relative flex h-fit flex-col items-center pt-20 px-5">
      {/* Background Images */}
      <div className="absolute top-4 inset-0 flex mx-auto gap-10 justify-between max-w-[100rem] pt-0 h-fit pointer-events-none mobile:flex-col mobile:top-0 mobile:h-[30rem]">
        <div className="flex-none w-[50%] max-w-[350px] tablet:w-[30%]">
          <BgImgLeft className="w-full h-auto" />
        </div>
        <div className="flex-none w-[50%] max-w-[350px] tablet:w-[30%] mobile:absolute mobile:bottom-0 mobile:right-0">
          <BgImgRight className="w-full h-auto" />
        </div>
      </div>

      <Link
        href="https://google.com/"
        className="flex justify-center p-2 mobile:w-[21rem] mobile:justify-between mobile:gap-1 bg-gray-900 hover:bg-gray-1000 border border-gray-700 rounded-xl w-fit gap-2 relative z-10"
      >
        <p className="text-base text-white text-center">
          Introducing: Aggregated Blockchains
        </p>
        <div className="p-1 bg-purple-300 rounded-full border-2 border-purple-500 text-white">
          <ArrowRightIcon width={11} height={12} className="text-white" />
        </div>
      </Link>

      <div className="flex flex-col items-center justify-center text-center relative z-10 mt-8">
        <h2 className="text-white font-semibold text-6xl mb-4 mobile:text-[2.625rem]">
          Web3, Aggregated.
        </h2>
        <p className="text-gray-100 text-xl">
          Enabling an infinitely scalable web of sovereign blockchains that{" "}
          <br className="mobile:hidden" />
          feels like a single chain. Powered by ZK tech.
        </p>
      </div>

      <div className="flex gap-4 max-w-[72rem] mobile:flex-col mobile:mt-16">
        {aggregatedList.map((item: IAggregatedList, index: number) => (
          <div
            key={index}
            className="py-6 px-4 mt-16 mobile:mt-0 bg-gray-600 hover:bg-gray-700 border border-gray-700 rounded-xl  font-medium cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="text-2xl text-white">{item.title}</h3>
            <div className="flex justify-between items-center text-base gap-4">
              <p className="opacity-70 text-white">{item.text}</p>
              <motion.div
                className={clsx(
                  "p-1 rounded-full w-fit",
                  hoveredIndex === index
                    ? "bg-white text-black"
                    : "bg-gray-700 text-white",
                )}
                initial={{ x: 0 }}
                animate={{ x: hoveredIndex === index ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon width={11} height={12} />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebAggregated;
