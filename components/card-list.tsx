import { List } from "@/typings";
import React from "react";
import Card from "./card";

type Props = {
  products: List[];
  text: string;
};

const CardList = ({ products, text }: Props) => {
  return (
    <>
      {products?.length ? (
        <div className="mx-auto grid gap-10 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
          {products?.map((item, index) => (
            <React.Fragment key={index}>
              <Card {...item} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          - No <span>{text}</span> by IMS -
        </p>
      )}
    </>
  );
};

export default CardList;
