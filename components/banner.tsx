"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Bannner = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden px-2 md:px-10 text-center flex flex-col gap-5 items-center justify-center md:justify-start banner-gradient">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center text-3xl md:text-5xl lg:text-7xl font-medium mt-[3rem] md:mt-[7rem] text-[#355fc1] xl:mt-30"
      >
        Innovative Solutions, Seamless Integration
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="z-10 text-sm text-md md:text-xl  text-[#95A5A6]"
      >
        Driving Excellence in Test Measurement and Industry 4.0 Applications
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className="z-10 flex flex-col gap-2 md:flex-row"
      >
        <Link
          href="/#"
          className="bg-[#F39C12] text-white font-semibold px-[2rem] py-[0.6rem] rounded-xl"
        >
          Learn More
        </Link>
        <Link
          href="/contact"
          className="bg-white px-[2rem] py-[0.6rem]  rounded-xl md:ml-2.5 font-semibold border-2 border-black"
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
        className="absolute px-10 -bottom-[5rem] md:-bottom-[15rem] lg:-bottom-[30rem]"
      >
        <Image
          src="/background-main.png"
          alt="Innovative Solutions, Seamless Integration"
          width={1000}
          height={1000}
          priority
          quality={98}
          className="w-fit h-fit object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Bannner;
