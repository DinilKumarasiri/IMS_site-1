"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/constant";
import { LuMenu, LuX } from "react-icons/lu";
import { motion } from "framer-motion";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="z-[999] relative text-black">
      <nav className="flex fixed items-center py-4 px-6 lg:px-[10rem] w-full shadow-xl select-none bg-white">
        <Link
          href="/"
          className="font-semibold tracking-[0.2rem] text-3xl text-[#3498DB] flex items-center"
          shallow={true}
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
              >
                <Link href={item.href} shallow={true}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <button
            className="text-2xl p-2 rounded-full md:hidden hover:bg-gray-500/20 text-[#F39C12]"
            aria-label="Aria Menu"
            onClick={() => {
              setMenuVisible(!menuVisible);
            }}
          >
            {menuVisible ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </nav>
      {menuVisible && <SideMenu />}
    </header>
  );
};

export default Header;

export const SideMenu = () => {
  return (
    <ul className="fixed right-2 top-[5rem] p-2 flex flex-col gap-4 w-[10rem] items-start bg-white shadow-xl rounded-md">
      {navLinks.map((item, index) => (
        <li
          key={index}
          className="w-full hover:bg-gray-600/10  py-1 rounded-md"
        >
          <Link href={item.href} className="ml-[5px]">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
