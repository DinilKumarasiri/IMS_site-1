import ItemCommon from "@/components/item-common";
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
      <section className="h-screen w-full flex items-center justify-center scroll-mt-28">
        <ItemCommon {...item} />
      </section>
    </main>
  );
};

export default Product;
