import { CardCardapio } from "@/components/Cards";
import { HomeNavbar, AuxNavbar } from "@/components/Navbars";

async function getCardapio() {
  const url = `${process.env.BASE_URL}/item`

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
  const items = await getCardapio();

  return (
    <body className="w-screen h-screen">
      <HomeNavbar />
      <AuxNavbar />
      <main className="w-screen h-[calc(100vh-120px)] flex items-center justify-center flex-wrap gap-10 py-10 ">
        <div id="item">
          {items.map((pizza) => {
            return <CardCardapio pizza={pizza} />;
          })}
        </div>
      </main>
    </body>
  );
}
