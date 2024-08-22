"use client";

import { useState, useRef, useEffect } from "react";

import ChevronIcon from "#/public/icon/chevron-left.svg";

import ArrowLink from "#/components/arrow-link";

const VideoCarousel = () => {
  const videos = [
    "/video/carousel-1.mp4",
    "/video/carousel-2.mp4",
    "/video/carousel-3.mp4",
  ];
  const [videoIndex, setVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0); // State to track video progress
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isSwitchingRef = useRef(false);

  function showNextVideo() {
    setVideoIndex((index) => (index === videos.length - 1 ? 0 : index + 1));
  }

  function showPrevVideo() {
    setVideoIndex((index) => (index === 0 ? videos.length - 1 : index - 1));
  }

  useEffect(() => {
    const currentVideo = videoRefs.current[videoIndex];
    if (currentVideo && !isSwitchingRef.current) {
      currentVideo.currentTime = 0;
      currentVideo.play();
    }
  }, [videoIndex]);

  const handleTimeUpdate = () => {
    const currentVideo = videoRefs.current[videoIndex];
    if (currentVideo) {
      const progressPercentage =
        (currentVideo.currentTime / currentVideo.duration) * 100;
      setProgress(progressPercentage);
      if (currentVideo.duration - currentVideo.currentTime < 0.1) {
        isSwitchingRef.current = true;
        currentVideo.pause();
        showNextVideo();
        isSwitchingRef.current = false;
      }
    }
  };

  return (
    <section className="relative mt-6 px-5 mobile:mt-[5rem]">
      <div className="w-full h-full overflow-hidden max-w-[72rem] m-auto">
        <div
          className="flex transition-transform duration-1500 ease-in-out max-w-[72rem] m-auto"
          style={{ transform: `translateX(${-100 * videoIndex}%)` }}
        >
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="relative h-[400px] w-full flex-shrink-0 flex-grow-0 max-w-[72rem] m-auto"
            >
              <div className="w-full absolute bottom-0 z-50 px-4 py-10">
                {/* Progress Bar */}
                <div className="backdrop-blur-sm mb-4 bg-white bg-opacity-20 relative z-10 text-xs text-white py-1.5 px-2 w-fit  rounded-full overflow-hidden">
                  <span className="relative z-20">
                    0{idx + 1} ♦ {videos.length}
                  </span>
                  <div
                    className="absolute top-0 left-0 h-full bg-white bg-opacity-20 transition-all rounded-full"
                    style={{
                      width: `${idx === videoIndex ? progress : 0}%`,
                      zIndex: 10,
                    }}
                  />
                </div>
                <div className="flex w-full justify-between gap-10 items-center mobile:flex-col mobile:gap-4 mobile:mb-4">
                  <h3 className="font-medium text-white text-[1.8rem] w-fit">
                    Lido Finance. Earn staking rewards
                  </h3>
                  <ArrowLink
                    href=""
                    color="purple"
                    className="mobile:w-full mobile:justify-center"
                  >
                    Learn More
                  </ArrowLink>
                </div>
              </div>

              <video
                autoPlay
                playsInline
                muted
                className="inset-0 z-[-1] box-content w-full h-full object-cover rounded-2xl opacity-40 max-w-[72rem] m-auto"
                onTimeUpdate={handleTimeUpdate}
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[80rem] m-auto flex w-full justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tablet:w-[7rem] tablet:relative tablet:top-20 mobile:hidden">
        <button
          type="button"
          aria-label="Previous slide"
          className="text-white bg-white bg-opacity-15 w-[3.2rem] h-[3.2rem] flex justify-center items-center rounded-full hover:bg-opacity-30"
          onClick={showPrevVideo}
        >
          <ChevronIcon width={24} height={24} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="text-white bg-white bg-opacity-15 w-[3.2rem] h-[3.2rem] flex justify-center items-center rounded-full hover:bg-opacity-30"
          onClick={showNextVideo}
        >
          <ChevronIcon width={24} height={24} className="rotate-180" />
        </button>
      </div>
      <div className="hidden absolute mobile:flex gap-2 bg-white bg-opacity-10 py-2 px-6 rounded-full left-1/2 transform -translate-x-1/2 bottom-4">
        {videos.map((_, index) => (
          <button
            type="button"
            key={index}
            className="text-white"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setVideoIndex(index)}
          >
            {index === videoIndex ? (
              <div className="rounded-full bg-white bg-opacity-50 w-4 h-1.5" />
            ) : (
              <div className="rounded-full bg-white bg-opacity-50 w-1.5 h-1.5" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
