import { AuthNavbar } from "@/components/Navbars";

async function getPessoa() {
  const url = `pizzariadamari-production.up.railway.app/api/cliente/3`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);
  return result.json();
}

export default async function Perfil() {
  //const pessoa = await getPessoa();
  const pessoa = {
    idCliente: 3,
    nome: "matheus gomes",
    cpf: "12345678900",
    email: "matheusgomes@gmail.com",
    telefone: "11223445567",
    usuario: "matheus",
    senha: "$2a$10$xbEe55lxsmX34U252QDsa.R9.uFpxv0Z04DwAD/f19ZMvVUFz9WJG",
    dataNascimento: "1998-09-19",
    authorities: [{ authority: "ROLE_CLIENTE" }],
    username: "matheusgomes@gmail.com",
    password: "$2a$10$xbEe55lxsmX34U252QDsa.R9.uFpxv0Z04DwAD/f19ZMvVUFz9WJG",
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    enabled: true,
  };
  
  const STYLE = {
    text: "text-black my-2",
  };

  return (
    <body className="w-screen h-screen">
      <AuthNavbar />
      <main className="flex items-center justify-center">
        <div className="bg-amber-100 h-96 w-72 rounded-lg p-2 mt-6 relative flex flex-col items-center"> {/* Adicione flex e items-center para centralizar verticalmente */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-2 right-2 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <p className="text-black my-2">{pessoa.nome}</p>
          <p className="text-black my-2">{pessoa.cpf}</p>
          <p className="text-black my-2">{pessoa.email}</p>
          <p className="text-black my-2">{pessoa.telefone}</p>
          <p className="text-black my-2">{pessoa.usaurio}</p>
          <p className="text-black my-2">{pessoa.username}</p>
        </div>
      </main>
    </body>
  );
}
