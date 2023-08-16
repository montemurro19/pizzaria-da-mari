import { HomeNavbar } from "@/components/Navbars";
import { FormLogin } from "@/components/Forms";

export default function Login() {
  return (
    <body className="w-screen h-screen">
      <HomeNavbar />
      <div className="flex">
        <aside className="flex flex-col items-center justify-end w-1/2 h-[calc(100vh-84px)] bg-amber-200 rounded-r-3xl">
          <h1 className=" text-3xl font-extrabold text-black text-center m-4">Tá fazendo a boa!</h1>
          <p className="text-black text-center pb-28">Faça seu login e desfrute das melhores pizzas do mercado!</p>
        </aside>
        <main className="w-1/2 h-[calc(100vh-84px)] flex items-center justify-center ">
          <FormLogin />
        </main>
      </div>
    </body>
  );
}
