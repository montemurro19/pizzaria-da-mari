import { CardCardapio } from "@/components/Cards";
import { HomeNavbar, AuxNavbar } from "@/components/Navbars";

async function getCardapio() {
  const url = `pizzariadamari-production.up.railway.app/item`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);
  return result.json();
}

export default async function Cardapio() {
  const result = await getCardapio();
  const items = result.content;

  return (
    <body className="w-screen h-screen">
      <HomeNavbar />
      <AuxNavbar />
      <main className="w-screen">
        <div
          id="item"
          className="max-w-screen h-[calc(100vh-120px)] flex items-center justify-center flex-wrap gap-10 py-10 "
        >
          {items.map((pizza) => {
            return <CardCardapio pizza={pizza} />;
          })}
        </div>
      </main>
    </body>
  );
}
