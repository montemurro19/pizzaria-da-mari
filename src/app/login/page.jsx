"use client"

import { HomeNavbar } from "@/components/Navbars";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import InputText from "@/components/inputText";
import Button from "@/components/Button";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const resp = await login(data);
    if (resp?.error) console.log(resp.error);
  };

  return (
    <body className="w-screen h-screen">
      <HomeNavbar />
      <div className="flex">
        <aside className="flex flex-col items-center justify-end w-1/2 h-[calc(100vh-84px)] bg-amber-200 rounded-r-3xl">
          <h1 className=" text-3xl font-extrabold text-black text-center m-4">
            Tá fazendo a boa!
          </h1>
          <p className="text-black text-center pb-28">
            Faça seu login e desfrute das melhores pizzas do mercado!
          </p>
        </aside>
        <main className="w-1/2 h-[calc(100vh-84px)] flex items-center justify-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-2/3 h-max flex-col items-stretch p-10 bg-amber-100 rounded-3xl space-y-2"
          >
            <InputText register={register} label="email" name="email" />
            <InputText
              register={register}
              label="senha"
              name="senha"
              type="password"
            />
            <Button>entrar</Button>
          </form>
        </main>
      </div>
    </body>
  );
}
