"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constant";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="z-[999] relative text-black">
      <nav className="flex fixed items-center py-4 px-6 lg:px-[10rem] w-full shadow-xl select-none bg-white">
        <Link
          href="/"
          className="font-semibold tracking-[0.2rem] text-3xl text-[#3498DB] flex items-center"
        >
          <Image
            src="/logo.png"
            alt="IMS Logo"
            width={35}
            height={35}
            className="object-cover mr-2"
          />
          IMS
        </Link>
        <div className="flex-1 flex items-center justify-end">
          <ul className="hidden md:flex items-center gap-3">
            {navLinks.map((item, index) => (
              <motion.li
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                key={index}
                className="group"
              >
                <Link
                  href={item.href}
                  className="group-last:border-2 group-last:border-[#F39C12] group-last:px-3 group-last:py-2 group-last:rounded-xl group-last:hover:bg-[#F39C12] group-last:hover:text-white transition"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
