import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 bg-white text-black">
      <div className="flex flex-col md:flex-row items-center justify-around pb-10 pt-10 md:px-[15rem] gap-[2.5rem] md:gap-[5rem]">
        <div className="flex flex-col justify-center items-center gap-2">
          <Link
            href="/"
            className="font-semibold  text-xl text-[#3498DB] flex items-center"
          >
            <Image
              src="/logo.png"
              alt="IMS Logo"
              width={30}
              height={30}
              className="object-cover mr-2"
            />
            IMS Systems
          </Link>
          <p className="text-gray-500 text-sm">Co Reg: 201413518WE</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-1">
          <h4 className="uppercase font-medium">Company</h4>
          <ul className="text-sm flex flex-col items-center md:items-start gap-1">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:underline">
                Service
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:underline">
                products
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-1">
          <h4 className="uppercase font-medium">Contact</h4>
          <ul className="text-sm flex flex-col items-center md:items-start gap-1">
            <li>
              <Link href="tel:+6593398013" className="hover:underline">
                Contact via Telephone
              </Link>
            </li>
            <li>
              <Link
                href="mailto:support@imsaasia.com"
                className="hover:underline"
              >
                Contact via Email
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-1">
          <h4 className="uppercase font-medium">Office Hours</h4>
          <ul className="text-sm flex flex-col items-center md:items-start gap-1">
            <li>Monday - Friday: 9 am - 5 pm</li>
            <li>Saturday: By appointment</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <hr className="w-[80%] m-auto border-t-2 border-gray-500/25" />
      <div className="flex flex-col md:flex-row items-center justify-around gap-3 pb-10 pt-10">
        <p className="text-sm text-gray-500">
          &copy; 2024 IMS Systems. All rights reserved.
        </p>
        <Link
          href="https://shanukapeiris.netlify.app/"
          className="text-sm text-gray-500 hover:underline"
        >
          Design & Dev
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
