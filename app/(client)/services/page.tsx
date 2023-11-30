import { fjalla } from "@/app/font";
import Card from "@/components/card";
import CardList from "@/components/card-list";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";

const query = groq`*[_type == 'service']`;

const Services = async () => {
  const services = await client.fetch(query);

  return (
    <main className="flex flex-col">
      <section className="h-full w-full flex flex-col items-center justify-center gap-10">
        <h1
          className={`${fjalla.className} text-4xl md:text-5xl lg:text-7xl mt-[3rem] md:mt-[7rem] text-black xl:mt-30`}
        >
          All Services
        </h1>
        <CardList products={services} text="Services" />
      </section>
    </main>
  );
};

export default Services;
