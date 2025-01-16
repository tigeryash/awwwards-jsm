import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Navigation } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVidRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoLoad = () => {
    console.log("video loaded");
    console.log(loadedVideos);
    setLoadedVideos((prev) => prev + 1);
    console.log(loadedVideos);
  };

  //0 % 4 = 0 + 1 = 1
  //1 % 4 = 1 + 1 = 2
  //2 % 4 = 2 + 1 = 3
  //3 % 4 = 3 + 1 = 4
  //4 % 4 = 0 + 1 = 1
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked && nextVidRef.current) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          duration: 1,
          width: "100%",
          height: "100%",
          ease: "power1.inOut",
          onStart: () => {
            nextVidRef.current?.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(11% 9%, 77% 1%, 96% 89%, 0 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;
  return (
    <div className="overflow-x-hidden relative w-screen h-dvh">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="overflow-hidden relative z-10 w-screen rounded-lg  bg-blue-75 h-dvh"
      >
        <div>
          <div className="overflow-hidden absolute z-50 rounded-lg cursor-pointer mask-clip-path size-64 absolute-center">
            <div
              onClick={handleMiniVdClick}
              className="opacity-0 transition-all duration-500 origin-center scale-50 hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVidRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="object-cover object-center origin-center scale-150 size-64"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVidRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="object-cover object-center absolute invisible z-20 absolute-center size-64"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            className="object-cover object-center absolute top-0 left-0 size-full"
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="absolute right-5 bottom-5 z-40 special-font hero-heading text-blue-75">
          G<b>a</b>ming
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="px-5 mt-24 sm:px-10">
            <h1 className="text-blue-100 special-font hero-heading">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 text-blue-100 max-w-64 font-robert-regular">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<Navigation className="w-3 h-3" />}
              containerClass={"!bg-yellow-300 flex-center gap-1"}
            />
          </div>
        </div>
      </div>

      <h1 className="absolute right-5 bottom-5 text-black special-font hero-heading">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
