"use client";

import Link from "next/link";

import ArrowRightIcon from "#/public/icon/arrow-right.svg";
import BgImgLeft from "#/public/ui/bg-1.svg";
import BgImgRight from "#/public/ui/bg-2.svg";

const WebAggregated = () => (
  <section className="w-full relative flex h-[30rem] flex-col items-center pt-12">
    {/* Background Images */}
    <div className="absolute inset-0 flex mx-auto justify-between max-w-[100rem] pt-10 pointer-events-none">
      <BgImgLeft />
      <BgImgRight />
    </div>

    <Link
      href="https://google.com/"
      className="flex justify-center p-2 bg-gray-900 hover:bg-gray-1000 border border-gray-700 rounded-xl w-fit gap-2 relative z-10"
    >
      <p className="text-base text-white text-center">
        Introducing: Aggregated Blockchains
      </p>
      <div className="p-1 bg-purple-300 rounded-full border-2 border-purple-500">
        <ArrowRightIcon />
      </div>
    </Link>

    <div className="flex flex-col items-center justify-center text-center relative z-10 mt-8">
      <h2 className="text-white font-semibold text-6xl mb-4">
        Web3, Aggregated.
      </h2>
      <p className="text-gray-100 text-xl">
        Enabling an infinitely scalable web of sovereign blockchains that <br />
        feels like a single chain. Powered by ZK tech.
      </p>
    </div>
  </section>
);

export default WebAggregated;
