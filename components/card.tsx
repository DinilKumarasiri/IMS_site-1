import { urlForImage } from "@/lib/sanity.client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: SanityImageSource;
};

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className=" w-[20rem] h-[30rem] shadow-2xl rounded-xl flex flex-col gap-5 items-center justify-between pb-5 pt-2 border-2 border-black">
      <div className="w-full h-[60%] px-1">
        <Image
          src={urlForImage(image).url()}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-contain rounded-t-xl"
        />
      </div>
      <div className=" flex-1 mt-5 px-4 flex flex-col items-start justify-start gap-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="line-clamp-5 text-sm text-gray-500 text-justify li">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
