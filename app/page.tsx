"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="flex flex-col">
      <section className="relative h-screen w-full overflow-hidden px-10 text-center flex flex-col gap-5 items-center justify-start">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-medium mt-[7rem] text-[#355fc1]"
        >
          Innovative Solutions, Seamless Integration
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="text-2xl text-[#95A5A6]"
        >
          Driving Excellence in Test Measurement and Industry 4.0 Applications
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
        >
          <Link
            href="/#"
            className="bg-[#F39C12] text-white font-semibold px-[2rem] py-[0.6rem] rounded-xl"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="px-[2rem] py-[0.6rem] rounded-xl ml-2.5 font-semibold border-2 border-black"
          >
            Contact Us
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
          }}
          className="absolute -bottom-[25rem]"
        >
          <Image
            src="/background-main.png"
            alt="Innovative Solutions, Seamless Integration"
            width={1000}
            height={1000}
            priority
            quality={98}
            className="w-fit h-fit object-cover"
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
