import gsap from "gsap";

import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/all";
import { AnimatedTitle } from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
    });
  });
  return (
    <div id="about" className="w-screen min-h-screen">
      <div className="flex relative flex-col gap-5 items-center mt-36 mb-8">
        <h2 className="font-general text-sm uppercase md:text-[10px] ">
          Welcome to Zentry
        </h2>

        <AnimatedTitle
          title="Dic<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure"
          containerClass={
            "mt-5 text-center text-4xl uppercase leading-[.8] md:text-[6rem]"
          }
        />

        <div className="about-subtext">
          <p>The of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and plartforms</p>
        </div>
      </div>

      <div className="w-screen h-dvh" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="object-cover absolute top-0 left-0 size-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
