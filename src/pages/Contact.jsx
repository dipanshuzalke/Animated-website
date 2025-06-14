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
          top: "30%",
          left: "50%",
          xPercent: -50,
          yPercent: 0,
        },
        {
          width: "800px",
          height: "500px",
          borderRadius: "24px",
          top: "55%",
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

    // Move text upward on scroll (optional visual polish)
     gsap.to(textRef.current, {
        y: "-100vh",
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=150%",
          scrub: true,
        },
      });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-white"
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
          className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center text-black z-10"
        >
          <h1 className="text-8xl sm:text-8xl font-semibold leading-none">
            SWING WITH
          </h1>
          <h1 className="text-8xl sm:text-8xl font-semibold leading-none">
            CONFIDENCE
          </h1>
        </div>
      </div>
      {/* <button className="border border-gray-300 text-black px-6 py-3 rounded-3xl text-lg">
            LEARN MORE
          </button> */}
    </>
  );
};

export default ContactSection;
