"use client";

import Image from "next/image";

import EmissionsImg from "#/public/ui/emission.webp";

import ArrowLink from "#/components/arrow-link";

const Emissions = () => (
  <section className="bg-gradient-cover border-t border-gray-500">
    <div className="flex flex-col items-center justify-center px-10 py-24">
      <div className="text-center text-white max-w-lg mb-10">
        <h2 className="font-medium text-4xl mb-8 leading-tight tablet:text-xl">
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
        Learn More
      </ArrowLink>
      <Image
        src={EmissionsImg}
        width={1100}
        alt="Emissions Image"
        className=""
      />
    </div>
  </section>
);

export default Emissions;
