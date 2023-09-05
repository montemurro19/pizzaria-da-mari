"use client";
import Image from "next/image";
import { CardButton } from "./Pressables";

export const CardCardapio = ({ pizza }) => {
  const { img, title, description } = pizza;

  return (
    <div className="flex flex-col bg-amber-100 h-96 w-72 rounded-lg p-2">
      <Image src={img} width={275} height={200} />
      <CardButton text={"Adicionar ao Carrinho"} />
      <h1 className="font-bold text-lime-900 text-center">{title}</h1>
      <p className="text-lime-900 text-center break-normal">{description}</p>
    </div>
    
  );
};
