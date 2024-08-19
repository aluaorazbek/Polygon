import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import { scalingCategories } from "#/constants/mock-data";

import ArrowLink from "#/components/arrow-link";

const ScalingTechnology = () => (
  <div className="py-24">
    <h2 className="font-medium text-6xl mb-8 leading-tight tablet:text-xl text-center text-white">
      The most adopted scaling technology
    </h2>
    <div className="max-w-[72rem] m-auto">
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
  </div>
);

export default ScalingTechnology;
