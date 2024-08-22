"use client";

import Image from "next/image";

import EmissionsImg from "#/public/ui/emission.webp";

import ArrowLink from "#/components/arrow-link";

const Emissions = () => (
  <section className="bg-gradient-cover border-t border-gray-500">
    <div className="flex flex-col items-center justify-center px-10 py-24 mobile:py-10 mobile:px-5 mobile:items-start">
      <div className="text-center text-white max-w-[40rem] mb-10 mobile:text-left">
        <h2 className="font-medium text-6xl mb-8 leading-tight tablet:text-[2.62rem]">
          Hello world, <br />
          goodbye emissions
        </h2>
        <p className="text-gray-100 text-2xl">
          We are leveraging our core blockchain solutions and services to be
          proactive in the fight against climate change.
          <span className="text-white"> Polygon is carbon neutral </span>, with
          plans to be climate positive.
        </p>
      </div>
      <ArrowLink color="gradient" href="#">
        Read More
      </ArrowLink>
      <Image
        src={EmissionsImg}
        width={1000}
        height={1000}
        alt="Emissions Image"
        className="tablet:mt-10"
      />
    </div>
  </section>
);

export default Emissions;
