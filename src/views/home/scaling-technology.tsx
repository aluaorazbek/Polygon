"use client";

import Image from "next/image";

import { Tab, TabGroup, TabList, TabPanel, TabPanels ,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import clsx from "clsx";

import ChevronIcon from "#/public/icon/chevron-down.svg";

import { scalingCategories } from "#/constants/mock-data";

import ArrowLink from "#/components/arrow-link";


const ScalingTechnology = () => (
  <div className="py-24 tablet:px-5 tablet:pt-[10rem] mobile:py-[7rem]">
    <h2 className="font-medium text-6xl mb-8 leading-tight tablet:text-[2rem] tablet:text-left text-center text-white">
      The most adopted scaling technology
    </h2>

    {/* Desktop View */}
    <div className="max-w-[72rem] m-auto tablet:hidden">
      <TabGroup>
        <TabList className="flex py-1.5 px-2 rounded-full bg-gray-500 w-fit m-auto">
          {scalingCategories.map(({ type }) => (
            <Tab
              key={type}
              className="rounded-full py-2 px-6 text-sm font-medium text-white focus:outline-none data-[selected]:bg-white/80 data-[selected]:text-black"
            >
              {type}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-10">
          {scalingCategories.map(({ type, posts }) => (
            <TabPanel key={type} className="">
              <div className="flex flex-col gap-16">
                {posts.map((post, index) => (
                  <div
                    key={post.id}
                    className={clsx(
                      "relative flex justify-center items-center gap-12 transition",
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                    )}
                  >
                    <div className="w-[400px] h-[400px]">
                      <video
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="w-full h-full"
                      >
                        <source src={post.video} type="video/mp4" />
                      </video>
                    </div>
                    <div className="">
                      <div className="mb-14 max-w-[25rem] text-white">
                        <div className="flex items-center gap-2 mb-4">
                          <h3 className="font-medium text-[2rem]">
                            {post.title}
                          </h3>
                          <span className="border border-purple-600 text-purple-700 px-1.5 text-[0.625rem] leading-5 rounded-full">
                            {post.status}
                          </span>
                        </div>
                        <p className="text-base text-white/50">{post.text}</p>
                      </div>
                      <div className="flex gap-4">
                        <ArrowLink
                          href="https://polygon.technology/"
                          color="purple"
                        >
                          Open Docs
                        </ArrowLink>
                        <ArrowLink href="https://polygon.technology/">
                          Learn More
                        </ArrowLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>

    {/* Tablet View */}
    <div className="hidden tablet:flex max-w-[72rem] m-auto flex-col gap-2">
      {scalingCategories.map(({ type, posts }) => (
        <Disclosure as="div" key={type} className="mt-4">
          {({ open }) => (
            <>
              <DisclosureButton
                className={`group p-3.5 py-4 rounded-lg flex w-full items-center justify-between ${open ? "bg-white" : "bg-gray-500"}`}
              >
                <span
                  className={`text-sm ${open ? "text-black" : "text-white"}`}
                >
                  {type}
                </span>
                <ChevronIcon
                  className={`size-3 ${open ? "rotate-180 fill-black" : "fill-white"}`}
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
                <div className="flex flex-col gap-8 mt-6">
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="p-6 rounded-lg bg-gradient-card relative flex flex-col justify-center items-center gap-12 transition"
                    >
                      <Image
                        width={270}
                        height={270}
                        src={post.img}
                        alt={post.title}
                      />
                      <div>
                        <div className="mb-14 max-w-[25rem] text-white">
                          <div className="flex items-center gap-2 mb-4">
                            <h3 className="font-medium text-[2rem]">
                              {post.title}
                            </h3>
                          </div>
                          <p className="text-base text-white/50">{post.text}</p>
                        </div>
                        <div className="flex gap-4 small:flex-col">
                          <ArrowLink
                            href="https://polygon.technology/"
                            color="purple"
                            className="small:justify-center"
                          >
                            OPEN DOCS
                          </ArrowLink>
                          <ArrowLink
                            href="https://polygon.technology/"
                            className="small:justify-center"
                          >
                            LEARN MORE
                          </ArrowLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
);

export default ScalingTechnology;
