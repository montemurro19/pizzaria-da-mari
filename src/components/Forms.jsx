"use client";

export const FormLogin = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      senha: e.target.senha.value,
    };

    const JSONdata = JSON.stringify(data);

    const url = "https://localhost:8080/api/login";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    return await fetch(url, options);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-2/3 h-max flex-col items-stretch p-10 bg-amber-100 rounded-3xl space-y-2"
    >
      <label htmlFor="email" className="text-m text-gray-700">
        Email:
      </label>
      <input
        type="text"
        id="email"
        name="email"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="senha" className="text-m text-gray-700">
        Senha:
      </label>
      <input
        type="password"
        id="senha"
        name="senha"
        className="bg-amber-200 border-b border-gray-700"
      />
      <button
        type="submit"
        className="flex items-center justify-center p-2 rounded-lg bg-lime-900"
      >
        Login
      </button>
    </form>
  );
};

export const FormCadastroPessoa = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      confEmail: e.target.confEmail.value,
      senha: e.target.senha.value,
      confSenha: e.target.confSenha.value,
      cpf: e.target.cpf.value,
    };

    const JSONdata = JSON.stringify(data);

    const url = "";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    return await fetch(url, options);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-2/3 h-max flex-col items-stretch p-10 bg-amber-100 rounded-3xl space-y-2"
    >
      <label htmlFor="email" className="text-m text-gray-700">
        Email:
      </label>
      <input
        type="text"
        id="email"
        name="email"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="confEmail" className="text-m text-gray-700">
        Confirmação de Email:
      </label>
      <input
        type="text"
        id="confEmail"
        name="confEmail"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="senha" className="text-m text-gray-700">
        Senha:
      </label>
      <input
        type="password"
        id="senha"
        name="senha"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="confSenha" className="text-m text-gray-700">
        Confirmação de Senha:
      </label>
      <input
        type="password"
        id="confSenha"
        name="confSenha"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="cpf" className="text-m text-gray-700">
        CPF:
      </label>
      <input
        type="text"
        id="cpf"
        name="cpf"
        className="bg-amber-200 border-b border-gray-700"
      />
      <button
        type="submit"
        className="flex items-center justify-center p-2 rounded-lg bg-lime-900"
      >
        Cadastre-se
      </button>
    </form>
  );
};

export const FormCadastroEndereco = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      titulo: e.target.titulo.value,
      logradouro: e.target.logradouro.value,
      bairro: e.target.bairro.value,
      complemento: e.target.complemento.value,
      cep: e.target.cep.value,
      cidade: e.target.cidade.value,
      referencia: e.target.referencia.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "https://localhost:8080/api/cadastro";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };
    console.log(JSONdata);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-2/3 h-max flex-col items-stretch p-10 bg-amber-100 rounded-3xl space-y-2"
    >
      <label htmlFor="titulo" className="text-m text-gray-700">
        Título:
      </label>
      <input
        type="text"
        id="titulo"
        name="titulo"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="logradouro" className="text-m text-gray-700">
        Rua:
      </label>
      <input
        type="text"
        id="logradouro"
        name="logradouro"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="bairro" className="text-m text-gray-700">
        Bairro:
      </label>
      <input
        type="text"
        id="bairro"
        name="bairro"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="complemento" className="text-m text-gray-700">
        Complemento:
      </label>
      <input
        type="text"
        id="complemento"
        name="complemento"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="cep" className="text-m text-gray-700">
        CEP:
      </label>
      <input
        type="text"
        id="cep"
        name="cep"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="cidade" className="text-m text-gray-700">
        Cidade:
      </label>
      <input
        type="text"
        id="cidade"
        name="cidade"
        className="bg-amber-200 border-b border-gray-700"
      />
      <label htmlFor="referencia" className="text-m text-gray-700">
        Referência:
      </label>
      <input
        type="text"
        id="referencia"
        name="referencia"
        className="bg-amber-200 border-b border-gray-700"
      />
      <button
        type="submit"
        className="flex items-center justify-center p-2 rounded-lg bg-lime-900"
      >
        Cadastre-se
      </button>
    </form>
  );
};
