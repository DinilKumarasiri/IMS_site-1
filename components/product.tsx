import { client } from "@/lib/sanity.client";
import { fjalla } from "@/app/font";
import { groq } from "next-sanity";
import CardList from "./card-list";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const query = groq`*[_type == 'product'][0...3]`;

const Product = async () => {
  const products = await client.fetch(query);

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
      <CardList products={products} text={"Products"} />
      {products?.length ? (
        <Link
          href="/products"
          className="hidden md:block absolute right-16 hover:bg-gray-200 text-[#739af4] text-3xl px-6 py-6 rounded-full hover:opacity-95 transition"
          aria-label="View all of the products the company provides"
        >
          <LuArrowRight />
        </Link>
      ) : null}
      {products?.length ? (
        <Link
          href="/products"
          className="md:hidden flex items-center gap-2 right-16 hover:bg-gray-200 text-[#739af4] text-xl px-3 py-3 rounded-full hover:opacity-95 transition"
          aria-label="View all of the products the company provides"
        >
          <span>View full Products</span>
          <LuArrowRight />
        </Link>
      ) : null}
    </section>
  );
};

export default Product;
