"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import EmmisionsImg from "#/public/ui/emission.webp";
import ArrowLink from "#/src/components/ArrowLink";

const Emissions = () => {
  const { t } = useTranslation("home");

  const sections = t("scaling_section.public_chains", { returnObjects: true });
  console.log(sections);
  const videoList = [];
  return (
    <section className="bg-custom-gradient-cover border-t border-gray-500">
      <div className="flex flex-col items-center justify-center px-10 py-24">
        <div className="text-center text-white max-w-lg mb-10">
          <h2 className="font-medium text-4xl mb-8 leading-tight tablet:text-xl">
            {t("emissions_section.title_1")} <br />
            {t("emissions_section.title_2")}
          </h2>
          <p className="text-gray-100 text-2xl">
            {t("emissions_section.desc.part_1")}
            <span className="text-white">
              {t("emissions_section.desc.span")}
            </span>
            {t("emissions_section.desc.part_2")}
          </p>
        </div>
        <ArrowLink label="Read More" color="gradient" />
        <Image src={EmmisionsImg} width={1100} alt="" className="" />
      </div>
    </section>
  );
};

export default Emissions;
