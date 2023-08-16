import { HomeNavbar } from "@/components/Navbars";
import { FormCadastroEndereco } from "@/components/Forms";

export default function CadastroEndereco() {
  return (
    <body className="w-screen h-screen">
      <HomeNavbar />
      <div className="flex">
        <aside className="flex flex-col items-center justify-center w-1/2 h-[calc(100vh-84px)] bg-amber-200 rounded-r-3xl">
          <h1 className=" text-3xl font-extrabold text-black text-center m-4">
            Agora falta pouco!
          </h1>
          <p className="text-black text-center px-5">
            Para chegarmos até você precisamos saber a onde está complete
            corretamente os dados e fique tranquilo nosso entregadores estão
            acostumados
          </p>
        </aside>
        <main className="w-1/2 h-[calc(100vh-84px)] flex items-center justify-center ">
          <FormCadastroEndereco />
        </main>
      </div>
    </body>
  );
}
