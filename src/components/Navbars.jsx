import Image from 'next/image';
import Logo from '@/assets/logo.svg'
import { NavbarButton } from "./Pressables";

export const HomeNavbar = () => {
  return (
    <nav className="flex justify-between bg-amber-100 px-5 py-3">
      <a href="/">
        <Image src={Logo} width={60} height={60} alt="Logo" />
      </a>
      <ul className="flex gap-12 text-lime-900 text-sm items-center">
        <li>
          <NavbarButton text={"Fazer Pedido"} endpoint={"/"} />
        </li>
        <li>
          <NavbarButton text={"Cardápio"} endpoint={"/"} />
        </li>
        <li>
          <NavbarButton text={"Acompanhar Pedido"} endpoint={"/"} />
        </li>
        <li>
          <NavbarButton text={"Cadastre-se"} endpoint={"/"} />
        </li>
        <li>
          <NavbarButton text={"Login"} endpoint={"/"} />
        </li>
      </ul>
    </nav>
  );
};

export const AuxNavbar = () => {
  return (
    <nav className="flex justify-center bg-amber-200 p-2">
      <ul className="flex gap-16 text-lime-900 text-sm items-center">
        <li>
          <NavbarButton text={"Pizza Doce"} endpoint={"/"} />
        </li>
        <li>
          <NavbarButton text={"Pizza Salgada"} endpoint={"/"} />
        </li>
        <li>
          <NavbarButton text={"Bebida"} endpoint={"/"} />
        </li>
      </ul>
    </nav>
  );
};

export const AuthNavbar = () => {

}