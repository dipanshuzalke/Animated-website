import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../../public/video.mp4";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        {
          width: "100vw",
          height: "100vh",
          borderRadius: "0px",
          top: "25%",
          left: "50%",
          xPercent: -50,
          yPercent: 0,
        },
        {
          width: "800px",
          height: "500px",
          borderRadius: "24px",
          top: "30%",
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
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Text */}
      <div>
  {/* Hero Text */}
  <div
    className="relative pt-[20vh] top-[25%] left-1/2 -translate-x-1/2 text-center text-black z-10"
  >
    <h1 className="text-8xl sm:text-8xl font-semibold leading-none">
      SWING WITH
    </h1>
    <h1 className="text-8xl sm:text-8xl font-semibold leading-none">
      CONFIDENCE
    </h1>
  </div>

  {/* Hero Video Container */}
  <div
    ref={containerRef}
    className="relative h-screen overflow-hidden bg-white -mt-[16vw]"
  >
    {/* Video */}
    <video
      ref={videoRef}
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-[800px] h-[500px] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover rounded-3xl shadow-xl z-0"
    />

    {/* Button Positioned Just Below the Video */}
    <div className="absolute top-[80%] left-1/2 -translate-x-1/2 z-10">
      <button className="w-[800px] flex justify-center items-center border border-gray-300 text-black px-6 py-3 rounded-3xl text-lg">
        LEARN MORE
      </button>
    </div>
  </div>
</div>


    </div>
  );
};

export default ContactSection;
