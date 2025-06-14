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
          start: "top top",
          end: "+=50%",
          scrub: true,
          pin: true,
        },
      });

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
        className="relative h-screen overflow-hidden items-center mt-18"
      >
        {/* Hero Video */}
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-[90vw] md:w-[800px] h-[60vh] md:h-[500px] top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-3xl z-0"
        />

        {/* Hero Text */}
        <div
          ref={textRef}
          className="absolute top-[16%] md:top-[2%] left-1/2 -translate-x-1/2 text-center text-black z-10 px-4"
        >
          <h1 className="text-5xl md:text-8xl font-semibold leading-tight">
            SWING WITH
          </h1>
          <h1 className="text-5xl md:text-8xl font-semibold leading-tight">
            CONFIDENCE
          </h1>
        </div>
      </div>

      {/* Subscribe Section */}
      <section className="md:h-80 py-[4rem] px-[2rem] bg-black text-white">
        <div className="container flex flex-col md:flex-row gap-6 md:gap-2 md:justify-around items-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl max-w-xl">
            LET'S EXPERIENCE TENNIS TOGETHER
          </h1>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <p className="text-lg text-gray-500">Stay up to date</p>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 border border-amber-400 rounded-3xl w-full md:w-auto"
              />
              <button className="bg-amber-400 text-white px-4 py-2 rounded-3xl w-full md:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
