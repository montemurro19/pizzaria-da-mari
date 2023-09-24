"use server"

import { cookies } from 'next/headers'
export default async function apiLogin(credenciais) {
    const url = `pizzariadamari-production.up.railway.app/api/cliente/login`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(credenciais),
    };

    const result = await fetch(url, options);

    if (result.status !== 200) {
      return { message: "Erro ao logar. Verifique os campos." };
    }

    const user = await result.json();
    const token = user.token;

    cookies().set("token", token, {
      maxAge: 60 * 60 * 24 * 2,
    });

    return user;
  };

  export async function apiLogout(){
    cookies().set("gestanca_token", "", {
        maxAge: 1 
    })
}