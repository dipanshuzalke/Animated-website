// CoachesSection.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../public/image1.jpg"; // Adjust path as needed
import image2 from "../../public/image2.jpg"; // Adjust path as needed
import image3 from "../../public/image1.jpg"; // Adjust path as needed
import image4 from "../../public/image2.jpg"; // Adjust path as needed

gsap.registerPlugin(ScrollTrigger);

const CoachesSection = () => {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      [image1Ref.current, image2Ref.current, image3Ref.current, image4Ref.current].forEach((img) => {
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
              scrub: true,
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
        <div>
          <img
            ref={image1Ref}
            src={image1}
            alt="Coach 1"
            className="rounded-[3rem] object-cover w-120 h-120 transition-all mb-6 custom-shadow"
          />
          <p className="mb-4"> Los Angeles, CA</p>
          <h1 className="mb-4 text-8xl sm:text-5xl font-semibold leading-none">
            Sarah Thompson
          </h1>
          <p className="mb-4 w-120">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            ullam inventore laboriosam, et nisi, aperiam fugit voluptatum vitae
            repudiandae consequuntur aut? Omnis laborum molestiae quidem. Omnis
            maxime optio nam dolores.
          </p>
          <button className="border border-gray-300 text-black px-6 py-3 rounded-3xl text-lg">
            LEARN MORE
          </button>
        </div>
        <div>
          <img
            ref={image2Ref}
            src={image2}
            alt="Coach 2"
            className="rounded-[3rem] object-cover w-120 h-120 transition-all mb-6 custom-shadow"
          />
          <p className="mb-4"> Los Angeles, CA</p>
          <h1 className="mb-4 text-8xl sm:text-5xl font-semibold leading-none">
            Sarah Thompson
          </h1>
          <p className="mb-4 w-120">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            ullam inventore laboriosam, et nisi, aperiam fugit voluptatum vitae
            repudiandae consequuntur aut? Omnis laborum molestiae quidem. Omnis
            maxime optio nam dolores.
          </p>
          <button className="border border-gray-300 text-black px-6 py-3 rounded-3xl text-lg">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Images */}
      <div className="flex justify-between gap-8 mt-16">
        <div>
          <img
            ref={image3Ref}
            src={image3}
            alt="Coach 1"
            className="rounded-[3rem] object-cover w-120 h-120 transition-all mb-6 custom-shadow"
          />
          <p className="mb-4"> Los Angeles, CA</p>
          <h1 className="mb-4 text-8xl sm:text-5xl font-semibold leading-none">
            Sarah Thompson
          </h1>
          <p className="mb-4 w-120">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            ullam inventore laboriosam, et nisi, aperiam fugit voluptatum vitae
            repudiandae consequuntur aut? Omnis laborum molestiae quidem. Omnis
            maxime optio nam dolores.
          </p>
          <button className="border border-gray-300 text-black px-6 py-3 rounded-3xl text-lg">
            LEARN MORE
          </button>
        </div>
        <div>
          <img
            ref={image4Ref}
            src={image4}
            alt="Coach 2"
            className="rounded-[3rem] object-cover w-120 h-120 transition-all mb-6 custom-shadow"
          />
          <p className="mb-4"> Los Angeles, CA</p>
          <h1 className="mb-4 text-8xl sm:text-5xl font-semibold leading-none">
            Sarah Thompson
          </h1>
          <p className="mb-4 w-120">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            ullam inventore laboriosam, et nisi, aperiam fugit voluptatum vitae
            repudiandae consequuntur aut? Omnis laborum molestiae quidem. Omnis
            maxime optio nam dolores.
          </p>
          <button className="border border-gray-300 text-black px-6 py-3 rounded-3xl text-lg">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
