import ItemCommon from "@/components/item-common";
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
      <section className="h-screen w-full flex items-center justify-center scroll-mt-28">
        <ItemCommon {...item} />
      </section>
    </main>
  );
};

export default Service;
