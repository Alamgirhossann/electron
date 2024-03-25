import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

// Ensure GSAP recognizes ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AutoCounting: React.FC<{ start: number; end: number }> = ({
  start,
  end,
}) => {
  const countRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(start);

  useEffect(() => {
    const countElement = countRef.current;

    if (!countElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: countElement,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1, // Adjust the speed of animation
        markers: true, // Show markers for debug purposes
      },
    });

    tl.to(countElement, {
      opacity: 1,
      duration: 0.5,
      onUpdate: () => {
        setCount(Math.ceil(tl.progress() * end));
      },
    });

    return () => {
      tl.kill(); // Kill the animation when component unmounts
    };
  }, []);

  return (
    <div className="count-container">
      <div ref={countRef} className="count-up" style={{ opacity: 0 }}>
        <CountUp start={start} end={count} />
      </div>
    </div>
  );
};

export default AutoCounting;
