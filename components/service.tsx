import { client } from "@/lib/sanity.client";
import { fjalla } from "@/app/font";
import { groq } from "next-sanity";
import CardList from "./card-list";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const query = groq`*[_type == 'service'][0...3]`;

const Service = async () => {
  const services = await client.fetch(query);

  return (
    <section
      className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10 scroll-mt-20"
      id="service"
    >
      <h2
        className={`${fjalla.className} text-3xl md:text-5xl font-semibold text-[#95A5A6]`}
      >
        Our Services
      </h2>
      <CardList products={services} text="Services" />
      {/* {services?.length ? ( */}
      <Link
        href="/services"
        className="absolute right-16 hover:bg-gray-200 text-[#739af4] text-3xl px-6 py-6 rounded-full hover:opacity-95 transition"
      >
        <LuArrowRight />
      </Link>
      {/* ) : null} */}
    </section>
  );
};

export default Service;
