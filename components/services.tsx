"use client";

import { client, urlForImage } from "@/lib/sanity.client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type ProductProps = {
  title: string;
  description: string;
  image: SanityImageSource;
};

async function getProducts() {
  const query = `*[_type == 'service'][0...3]`;

  const data = await client.fetch(query);

  return data;
}

const Services = () => {
  const [data, setData] = useState<ProductProps[] | null>();

  useEffect(() => {
    getProducts().then((data) => setData(data));
  }, []);

  return (
    <section className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl md:text-5xl font-semibold text-[#95A5A6]">
        Our Services
      </h2>
      {data?.length ? (
        <div className="mx-auto grid gap-10 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
          {data?.map((item, index) => (
            <div
              key={index}
              className=" w-[20rem] h-[30rem] shadow-2xl rounded-xl flex flex-col gap-5 items-center justify-between pb-5 pt-2 border-2 border-black"
            >
              <div className="w-full h-[60%] px-1">
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain rounded-t-xl"
                />
              </div>
              <div className=" flex-1 mt-5 px-4 flex flex-col items-start justify-start gap-4">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-500 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <Link href="/services">More Services</Link>
        </div>
      ) : (
        <p className="text-sm text-gray-500">- No Services Content -</p>
      )}
      {data?.length ? (
        <Link
          href="/services"
          className="bg-[#739af4] text-white px-6 py-3 rounded-2xl font-normal hover:opacity-95"
        >
          More Services
        </Link>
      ) : null}
    </section>
  );
};

export default Services;
