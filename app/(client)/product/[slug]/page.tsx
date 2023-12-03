import { getProduct } from "@/sanity/sanity.utils";
import React from "react";

type ProductProps = {
  params: { slug: string };
};

const Product = async ({ params }: ProductProps) => {
  const slug = params.slug;

  const item = await getProduct(slug);

  return (
    <main className="flex flex-col">
      <section className="h-screen w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-7xl">{item.title}</h1>
      </section>
    </main>
  );
};

export default Product;
