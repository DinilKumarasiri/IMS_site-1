import { Common } from "@/typings";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-2 list-disc space-y-1">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
};

const ItemCommon = ({ title, content, url, image }: Common) => {
  return (
    <div className="flex flex-row items-center justify-center px-10 gap-[10rem]">
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <div className="text-sm">
          <PortableText
            value={content}
            components={myPortableTextComponents}
          ></PortableText>
        </div>
        {url && (
          <Link
            href={url}
            target="_black"
            className="bg-blue-400 w-fit px-8 py-3 rounded-full text-white font-semibold opacity-80 hover:opacity-100"
          >
            Learn More
          </Link>
        )}
      </div>
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        priority
        quality={98}
        className="w-auto h-auto object-cover border-2 border-black rounded-xl"
      />
    </div>
  );
};

export default ItemCommon;
