import gsap from "gsap";
import { useEffect, useRef } from "react";

type AnimatedTitleProps = {
  title: string;
  containerClass: string;
};

export const AnimatedTitle = ({
  title,
  containerClass,
}: AnimatedTitleProps) => {
  const contianerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: contianerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg)",

        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, contianerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contianerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, idx) => (
        <div
          key={idx}
          className="flex-wrap gap-2 px-10 max-w-full flex-center md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
