"use client";

import { client } from "@/lib/sanity.client";
import React, { useEffect, useState } from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import Card from "./card";
import { fjalla } from "@/app/font";
import { LuArrowRight } from "react-icons/lu";

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
    <section
      className="py-10 px-10 md:px-40 flex flex-col items-center justify-center gap-10 scroll-mt-20"
      id="product"
    >
      <h2
        className={`${fjalla.className} text-3xl md:text-5xl font-semibold text-[#95A5A6]`}
      >
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
        <p className="text-sm text-gray-500">- No Products by IMS -</p>
      )}
      {data?.length ? (
        <Link
          href="/products"
          className="absolute right-16 hover:bg-gray-200 text-[#739af4] text-3xl px-6 py-6 rounded-full hover:opacity-95 transition"
        >
          <LuArrowRight />
        </Link>
      ) : null}
    </section>
  );
};

export default Product;
