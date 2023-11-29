"use client";

import { client } from "@/lib/sanity.client";
import React, { useEffect, useState } from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import Card from "./card";

type CardProps = {
  title: string;
  description: string;
  image: SanityImageSource;
};

async function getProducts() {
  const query = `*[_type == 'product'][0...3]`;

  const data = await client.fetch(query);

  return data;
}

const Product = () => {
  const [data, setData] = useState<CardProps[] | null>();

  useEffect(() => {
    getProducts().then((data) => setData(data));
  }, []);

  return (
    <section className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl md:text-5xl font-semibold text-[#95A5A6]">
        Our Products
      </h2>
      {data?.length ? (
        <div className="mx-auto grid gap-10 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
          {data?.map((item, index) => (
            <React.Fragment key={index}>
              <Card {...item} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">- No Products Content -</p>
      )}
      {data?.length ? (
        <Link
          href="/products"
          className="bg-[#739af4] text-white px-6 py-3 rounded-2xl font-normal hover:opacity-95"
        >
          More Products
        </Link>
      ) : null}
    </section>
  );
};

export default Product;
