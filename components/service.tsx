"use client";

import { client, urlForImage } from "@/lib/sanity.client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "./card";

type CardProps = {
  title: string;
  description: string;
  image: SanityImageSource;
};

async function getProducts() {
  const query = `*[_type == 'service'][0...3]`;

  const data = await client.fetch(query);

  return data;
}

const Service = () => {
  const [data, setData] = useState<CardProps[] | null>();

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
            <React.Fragment key={index}>
              <Card {...item} />
            </React.Fragment>
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

export default Service;
