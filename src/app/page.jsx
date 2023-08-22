import { HomeNavbar } from "@/components/Navbars";
import Image from "next/image";
import Pizza from "@/assets/pizza.png";
import Motoboy from "@/assets/motoboy.svg";

export default function Home() {
  return (
    <body className="w-screen h-screen">
      <HomeNavbar />
      <main className="fixed bottom-0 w-3/5 h-screen flex flex-col justify-center
        items-center">
        <Image src={Motoboy} width={250} height={250} />
        <h1 className="text-4xl font-bold text-amber-100 mb-4">
          Bem vindo à Pizzaria da Mari!
        </h1>
        <p className="text-amber-100">
          Aqui o nosso objetivo é matar a sua larica escolha a pizza que você
          deseja.
        </p>
      </main>
      <Image src={Pizza} className="fixed right-0 bottom-0 h-4/5 w-2/5" />
    </body>
  );
}
