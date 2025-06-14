import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="top-0 z-50 bg-whit py-8 px-16 flex justify-around items-center border border-b-gray-200"
    >
      <div className="flex gap-12 text-lg font-bold">
        <a href="">Location</a>
        <a href="">Fitness</a>
      </div>
      <h1 className="text-xl font-bold">My website</h1>
      <div className="flex gap-12 text-lg font-bold">
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
