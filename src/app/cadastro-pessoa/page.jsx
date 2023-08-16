import { HomeNavbar } from "@/components/Navbars";
import { FormCadastroPessoa } from "@/components/Forms";
import Image from "next/image";
import Emoji from "@/assets/emoji.png"

export default function CadastroPessoa() {
  return (
    <body className="w-screen h-screen">
      <HomeNavbar />
      <div className="flex">
        <main className="w-1/2 h-[calc(100vh-84px)] flex items-center justify-center ">
          <FormCadastroPessoa />
        </main>
        <aside className="flex flex-col items-center justify-end w-1/2 h-[calc(100vh-84px)] bg-amber-200 rounded-l-3xl">
          <h1 className="text-2xl font-extrabold text-black text-center m-4">
            Venha fazer parte e mate quem está de matando!
          </h1>
          <p className="text-black text-center">
            Faça seu login e desfrute das melhores pizzas do mercado.
          </p>
          <p className= "text-black text-center px-20 p-1">
            Anote a sua senha em algum lugar para não esquecer...
          </p>
          <Image src={Emoji}  className="h-48 w-48 p-4" />
        </aside>
      </div>
    </body>
  );
}
