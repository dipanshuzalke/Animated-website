import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const locations = [
  {
    title: "GRANDVIEW PARK TENNIS CENTER",
    address: "123 MAPLEWOOD DRIVE, RIVERTON",
    image: "/image1.jpg",
  },
  {
    title: "OAKRIDGE SPORTS COMPLEX",
    address: "456 OAKRIDGE LANE, BROOKFIELD",
    image: "/image2.jpg",
  },
  {
    title: "RIVERVIEW TENNIS ACADEMY",
    address: "789 PINECREST AVENUE, HILLSIDE",
    image: "/image1.jpg",
  },
  {
    title: "PINECREST COURT CLUB",
    address: "101 GRANDVIEW ROAD, LAKESHORE",
    image: "/image2.jpg",
  },
];

export default function Locations() {
  return (
    <section
      className="text-white py-16 px-6 md:px-20 relative bg-cover bg-center"
      style={{ backgroundImage: "url(/image2.jpg)" }}
    >
      <div className="max-w-7xl md:flex md:justify-between md:items-center mx-auto">
        {/* Text Content */}
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold mb-4">OUR LOCATIONS</h2>
          <p className="text-lg max-w-xl mb-6">
            Ready to take your tennis game to the next level? Experience
            world-class coaching, state-of-the-art facilities, and a vibrant
            tennis community. Enroll today and become part of a legacy of
            excellence.
          </p>
          <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold py-2 px-6 rounded-full transition">
            START TODAY &rarr;
          </button>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {locations.map((loc, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <div className="bg-white text-black rounded-[1.5rem] overflow-hidden shadow-lg">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-80 h-40 object-cover"
                />
              </div>
              <div className="py-4">
                <h3 className="font-bold text-sm mb-1">{loc.title}</h3>
                <p className="text-sm text-gray-200">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden mt-10">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar]}
            className="w-full"
          >
            {locations.map((loc, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-1" key={index}>
                  <div className="bg-white text-black rounded-[1.5rem] overflow-hidden shadow-lg">
                    <img
                      src={loc.image}
                      alt={loc.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="py-4">
                    <h3 className="font-bold text-sm mb-1">{loc.title}</h3>
                    <p className="text-sm text-gray-200">{loc.address}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
