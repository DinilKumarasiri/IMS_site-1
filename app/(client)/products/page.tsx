import { fjalla } from "@/app/font";
import CardList from "@/components/card-list";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import React from "react";

const query = groq`*[_type == 'product']`;

const Products = async () => {
  const products = await client.fetch(query);

  return (
    <main className="flex flex-col">
      <section className="h-full w-full flex flex-col items-center justify-center gap-10">
        <h1
          className={`${fjalla.className} text-4xl md:text-5xl lg:text-7xl mt-[3rem] md:mt-[7rem] text-black xl:mt-30`}
        >
          All Products
        </h1>
        <CardList products={products} text="Products" />
      </section>
    </main>
  );
};

export default Products;
