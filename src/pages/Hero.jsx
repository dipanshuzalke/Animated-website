import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../../public/video.mp4";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        width: "100vw",
        height: "100vh",
        margin: 0,
        borderRadius: 0,
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 0%", // trigger when center hits center
          end: "+=50%", // controls animation duration
          scrub: true,
          pin: true,
        },
      });

      // Move text upward with scroll (no scale, no pin)
      gsap.to(textRef.current, {
        y: "-80vh",
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=150%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-white mt-20"
      >
        {/* Hero Video */}
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-[800px] h-[500px] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-3xl shadow-xl z-0"
        />

        {/* Hero Text */}
        <div
          ref={textRef}
          className="absolute top-[2%] left-1/2 -translate-x-1/2 text-center text-black z-10"
        >
          <h1 className="text-8xl sm:text-8xl font-semibold leading-none">
            SWING WITH
          </h1>
          <h1 className="text-8xl sm:text-8xl font-semibold leading-none">
            CONFIDENCE
          </h1>
        </div>
      </div>
      <section className="h-80 bg-black text-white flex justify-around items-center text-3xl">
        <h1>
          LET'S EXPERIENCE TENNIS
          <br /> TOGETHER
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-lg text-gray-500">Stay up to date</p>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 border border-amber-400 rounded-3xl"
            />
            <button className="bg-amber-400 text-white px-4 py-2 rounded-3xl ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* <CoachesSection /> */}
    </>
  );
};

export default HeroSection;
