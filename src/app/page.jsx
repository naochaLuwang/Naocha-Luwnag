"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image src="/profile.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-center justify-center gap-8 h-1/2 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Crafting Digital Wonders, One Pixel at a Time!
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
           Welcome to my creative playground, where code dances with imagination! 🎉 As a spirited software developer, I specialize in web and mobile development, turning ideas into vibrant digital experiences. Dive into my portfolio, where each project is a colorful adventure showcasing my passion for innovation and flair for design.
          </p>
          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <Link href=
            "/portfolio" className="p-4 text-white bg-black rounded-lg ring-1 ring-black">
              View My Work
            </Link>
            <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
