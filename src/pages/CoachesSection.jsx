// CoachesSection.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../public/image1.jpg"; // Adjust path as needed
import image2 from "../../public/image2.jpg"; // Adjust path as needed

gsap.registerPlugin(ScrollTrigger);

const CoachesSection = () => {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      [image1Ref.current, image2Ref.current].forEach((img) => {
        gsap.fromTo(
          img,
          {
            scale: 0.8,
            transformOrigin: "bottom center",
          },
          {
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              end: "top 10%",
              scrub: true
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-24 bg-white text-black"
    >
      {/* Header */}
      <div className="flex justify-between items-center text-3xl mb-16">
        <h1>
          MEET THE COACHES <br /> BEHIND ELYSIAN
        </h1>
        <button className="bg-amber-400 text-white px-6 py-3 rounded-3xl text-lg">
          EXPLORE ACADEMY
        </button>
      </div>

      {/* Images */}
      <div className="flex justify-between gap-8">
        <img
          ref={image1Ref}
          src={image1}
          alt="Coach 1"
          className="rounded-[2rem] object-cover w-120 h-120 transition-all"
        />
        <img
          ref={image2Ref}
          src={image2}
          alt="Coach 2"
          className="rounded-[2rem] object-cover w-120 h-120 transition-all"
        />
      </div>
    </section>
  );
};

export default CoachesSection;
