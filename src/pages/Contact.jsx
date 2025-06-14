import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../../public/video.mp4";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(videoRef.current, {
        willChange: "transform",
        transformOrigin: "center center",
      });

      gsap.fromTo(
        videoRef.current,
        {
          scale: isMobile ? 1.1 : 2,
          yPercent: 0,
        },
        {
          scale: 1,
          yPercent: -50,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: isMobile ? "+=30%" : "+=50%",
            scrub: true,
            pin: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-[5rem] md:pt-[12vh] relative overflow-hidden">
      {/* Hero Text */}
      <div className="relative mt-[5rem] top-[2%] md:-top-[10%] left-1/2 -translate-x-1/2 text-center text-black z-10 px-4">
        <h1 className="text-5xl md:text-8xl font-semibold leading-tight">
            SWING WITH
          </h1>
          <h1 className="text-5xl md:text-8xl font-semibold leading-tight">
            CONFIDENCE
          </h1>
      </div>

      {/* Hero Video Container */}
      <div
        ref={containerRef}
        className="relative h-[90vh] md:h-screen overflow-hidden bg-white -mt-[45vw] md:-mt-[16vw]"
      >
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-[90vw] md:w-[800px] h-[50vh] md:h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-xl md:rounded-3xl shadow-xl z-0"
        />

        <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 z-10 flex justify-center w-full">
          <button className="w-[90vw] max-w-[800px] flex justify-center items-center border border-gray-300 text-black px-6 py-3 rounded-3xl text-lg">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
