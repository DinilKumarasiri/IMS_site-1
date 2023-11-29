"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Bannner = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden items-start justify-start scroll-mt-28"
      id="banner"
    >
      <div className="z-1 absolute w-screen h-screen bg-[url('/background.jpg')] bg-cover bg-center grayscale brightness-50 opacity-85 md:brightness-75 md:opacity-75"></div>
      <div className="z-10 px-10 py-16 md:py-0 flex flex-col gap-5">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 text-4xl md:text-5xl lg:text-7xl font-medium mt-[3rem] md:mt-[7rem] text-white xl:mt-30"
        >
          Innovative Solutions, Seamless <br className="hidden lg:block" />{" "}
          Integration
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="z-10 text-left text-base text-md md:text-xl text-white"
        >
          Driving Excellence in Test Measurement and Industry 4.0 Applications
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="z-10 w-[10rem] md:w-auto flex flex-col gap-2 md:flex-row"
        >
          <Link
            href="#about"
            className="z-10 bg-[#F39C12] text-white font-semibold px-[2rem] py-[0.6rem] rounded-xl"
          >
            Learn More
          </Link>
          <Link
            href="mailto:support@imsaasia.com"
            className="z-10 bg-white px-[2rem] py-[0.6rem]  rounded-xl md:ml-2.5 font-semibold"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Bannner;
