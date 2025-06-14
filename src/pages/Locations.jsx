// src/components/Locations.jsx
const locations = [
  {
    title: "GRANDVIEW PARK TENNIS CENTER",
    address: "123 MAPLEWOOD DRIVE, RIVERTON",
    image: "../../public/image1.jpg",
  },
  {
    title: "OAKRIDGE SPORTS COMPLEX",
    address: "456 OAKRIDGE LANE, BROOKFIELD",
    image: "../../public/image2.jpg",
  },
  {
    title: "RIVERVIEW TENNIS ACADEMY",
    address: "789 PINECREST AVENUE, HILLSIDE",
    image: "../../public/image1.jpg",
  },
  {
    title: "PINECREST COURT CLUB",
    address: "101 GRANDVIEW ROAD, LAKESHORE",
    image: "../../public/image2.jpg",
  },
];

export default function Locations() {
  return (
    <section className="text-white py-16 px-6 md:px-20 relative bg-cover bg-center" style={{ backgroundImage: "url(../../public/image2.jpg)"}}>
      <div className="flex justify-between container items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">OUR LOCATIONS</h2>
          <p className="text-lg w-110 mb-6">
            Ready to take your tennis game to the next level? Experience
            world-class coaching, state-of-the-art facilities, and a vibrant
            tennis community. Enroll today and become part of a legacy of
            excellence.
          </p>
          <button className="bg-lime-400 hover:bg-lime-300 text-black font-bold py-2 px-6 rounded-full transition">
            START TODAY &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {locations.map((loc, index) => (
            <div className="flex flex-col gap-1">
              <div
                key={index}
                className="bg-white text-black rounded-[1.5rem] overflow-hidden shadow-lg"
              >
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
      </div>
    </section>
  );
}
