"use client";

import { fjalla } from "@/app/font";
import Card from "@/components/card";
import { client } from "@/lib/sanity.client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import React, { useEffect, useState } from "react";

type CardProps = {
  title: string;
  description: string;
  image: SanityImageSource;
};

async function getServices() {
  const query = `*[_type == 'service']`;

  const data = await client.fetch(query);

  return data;
}

const Services = () => {
  const [data, setData] = useState<CardProps[] | null>();

  useEffect(() => {
    getServices().then((data) => setData(data));
  }, []);

  return (
    <main className="flex flex-col">
      <section className="h-full w-full flex flex-col items-center justify-center gap-10">
        <h1
          className={`${fjalla.className} text-4xl md:text-5xl lg:text-7xl mt-[3rem] md:mt-[7rem] text-black xl:mt-30`}
        >
          All Services
        </h1>
        {data?.length ? (
          <div className="mx-auto grid gap-10 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
            {data?.map((item, index) => (
              <React.Fragment key={index}>
                <Card {...item} />
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">- No Products by IMS -</p>
        )}
      </section>
    </main>
  );
};

export default Services;
