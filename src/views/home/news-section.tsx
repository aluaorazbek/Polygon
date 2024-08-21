"use client";

import { MouseEventHandler, useState } from "react";
import Slider from "react-slick";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";

import ArrowIcon from "#/public/icon/arrow-right-up.svg";
import ArrowRightIcon from "#/public/icon/arrow-right.svg";
import NewImg1 from "#/public/ui/news-1.png";
import NewImg2 from "#/public/ui/news-2.png";
import NewImg3 from "#/public/ui/news-3.png";
import NewImg4 from "#/public/ui/news-4.png";
import NewImg5 from "#/public/ui/news-5.png";
import NewImg6 from "#/public/ui/news-6.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface NewsLinkProps {
  href: string;
  date: string;
  category: string;
  description: string;
  image: StaticImageData;
}

type NextArrowProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

/* eslint-disable react/prop-types */
const NewsLink: React.FC<NewsLinkProps> = ({
  href,
  date,
  category,
  description,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({
      x: 0,
      y: 10,
      opacity: 1,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    controls.start({
      x: -20,
      y: 20,
      opacity: 0,
    });
    setIsHovered(false);
  };

  return (
    <div className="w-[22rem] bg-gradient-card border border-gray-1000 rounded-lg hover:bg-gray-600">
      <Link
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={href}
        className="relative rounded-lg overflow-hidden"
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
          alt={description}
          className={clsx(
            "rounded-t-lg",
            isHovered ? "opacity-50" : "opacity-100",
          )}
        />
        <motion.div
          className="rounded-lg p-6"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4 flex justify-between text-xs">
            <span
              className={clsx(
                "text-white",
                isHovered ? "opacity-100" : "opacity-40",
              )}
            >
              {date}
            </span>
            <span className="text-purple-600">{category}</span>
          </div>
          <p className="font-medium text-white text-xl">{description}</p>
        </motion.div>
      </Link>
    </div>
  );
};

/* eslint-disable jsx-a11y/click-events-have-key-events */
function NextArrow(props: NextArrowProps) {
  const { onClick } = props;
  return (
    <button
      type="button"
      aria-label="Next slide"
      onClick={onClick}
      className="absolute -top-[7rem] right-[5rem] z-50 rounded-full w-[3.2rem] h-[3.2rem] flex py-4 pl-[1.1rem] bg-white bg-opacity-5 border border-gray-1000 hover:bg-opacity-10 cursor-pointer"
    >
      <ArrowRightIcon width={15} height={15} className="text-white" />
    </button>
  );
}

function PrevArrow(props: NextArrowProps) {
  const { onClick } = props;
  return (
    <button
      type="button"
      aria-label="Previous slide"
      onClick={onClick}
      className="absolute -top-[7rem] right-[9rem] z-50 rounded-full w-[3.2rem] h-[3.2rem] flex py-4 pl-[1.1rem] bg-white bg-opacity-5 border border-gray-1000 hover:bg-opacity-10 cursor-pointer"
    >
      <ArrowRightIcon
        width={15}
        height={15}
        className="rotate-180 text-white"
      />
    </button>
  );
}
/* eslint-enable jsx-a11y/click-events-have-key-events */

const NewsSection: React.FC = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const linksData = [
    {
      href: "https://polygon.technology/",
      date: "AUGUST 6, 2024",
      category: "AGGREGATION",
      description:
        "Polygon's latest innovation revolutionizes the blockchain ecosystem with unprecedented scalability.",
      image: NewImg1,
    },
    {
      href: "https://polygon.technology/",
      date: "July 5, 2024",
      category: "POLYGON NEWS",
      description:
        "Breaking news: Polygon announces partnership with major tech firm to enhance blockchain solutions.",
      image: NewImg2,
    },
    {
      href: "https://polygon.technology/",
      date: "June 14, 2024",
      category: "POLYGON SOLUTIONS",
      description:
        "Exploring Polygon's multi-chain strategy and how it's shaping the future of decentralized finance.",
      image: NewImg3,
    },
    {
      href: "https://polygon.technology/",
      date: "May 8, 2024",
      category: "CASE STUDIES",
      description:
        "Case Study: How a global enterprise leveraged Polygon to streamline its supply chain operations.",
      image: NewImg4,
    },
    {
      href: "https://polygon.technology/",
      date: "March 1, 2024",
      category: "AGGREGATION",
      description:
        "Understanding the benefits of Polygon's Layer 2 scaling solution for Ethereum-based applications.",
      image: NewImg5,
    },
    {
      href: "https://polygon.technology/",
      date: "February 23, 2024",
      category: "AGGREGATION",
      description:
        "Polygon introduces zk-Rollups: A new frontier in secure and scalable blockchain transactions.",
      image: NewImg6,
    },
  ];

  return (
    <section className="py-24">
      <h3 className="max-w-[72rem] m-auto text-white font-medium text-6xl mb-16 leading-tight tablet:text-xl">
        In the news
      </h3>
      <div className="relative max-w-[72rem] m-auto">
        <Slider {...carouselSettings}>
          {linksData.map((link, index) => (
            <NewsLink
              key={index}
              href={link.href}
              date={link.date}
              category={link.category}
              description={link.description}
              image={link.image}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsSection;
