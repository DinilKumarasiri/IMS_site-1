import { getService } from "@/sanity/sanity.utils";
import React from "react";

type ServiceProps = {
  params: { slug: string };
};

const Service = async ({ params }: ServiceProps) => {
  const slug = params.slug;

  const item = await getService(slug);

  return (
    <main className="flex flex-col">
      <section className="h-screen w-full flex flex-col items-center justify-center gap-10">
        <h1 className="text-7xl">{item.title}</h1>
      </section>
    </main>
  );
};

export default Service;
