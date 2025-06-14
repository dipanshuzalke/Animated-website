import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-20 border-t container">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h4 className="font-bold text-md tracking-wide mb-2">
            ELYSIAN TENNIS CAMPS
          </h4>
          <p className="text-md">
            From coast to coast: Uncover <br /> our 4 tennis camp locations.
          </p>
        </div>

        <div className="space-y-2 text-sm flex gap-12">
          <h4 className="font-bold uppercase">Locations</h4>
          <h4 className="font-bold uppercase">Fitness</h4>
          <h4 className="font-bold uppercase">About</h4>
          <h4 className="font-bold uppercase">Contact</h4>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            JOIN OUR NEWSLETTER
          </h2>
          <p className="text-gray-700 max-w-md mb-6">
            Join our newsletter to stay up to date on academy news, events,
            camps, and special deals.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border pl-6 pr-20 py-3 rounded-full w-full sm:w-auto flex-1 placeholder:text-left text-left"
          />
          <button className="bg-lime-400 text-black px-6 py-3 rounded-full hover:bg-lime-500 transition">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4 text-gray-500">
          <p>© 2024 Elysian Tennis. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="underline">
              License
            </a>
            <a href="#" className="underline">
              Styleguide
            </a>
            <a href="#" className="underline">
              Changelog
            </a>
          </div>
        </div>

        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="X">
            ✕
          </a>
          <a href="#" aria-label="YouTube">
            <Youtube />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
