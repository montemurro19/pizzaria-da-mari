import { AuthNavbar } from "@/components/Navbars";

export default async function Perfil() {
  const id = 1;
  const url = `http://localhost:8080/api/cliente/${id}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);

  console.log(result);

  return (
    <body className="w-screen h-screen">
      <AuthNavbar />
      <main className="flex items-center justify-center">
        <div className="bg-amber-100 h-96 w-72 rounded-lg p-2 mt-4"></div>
      </main>
    </body>
  );
}
