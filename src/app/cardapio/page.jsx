import { HomeNavbar, AuxNavbar } from "@/components/Navbars";

export default function Cardapio() {
    const items = []
  return (
    <body className="w-screen h-screen">
      <HomeNavbar />
      <AuxNavbar />
      <div className="flex">
        <main className="w-screen h-[calc(100vh-120px)] flex items-center justify-center "></main>
      </div>
    </body>
  );
}
