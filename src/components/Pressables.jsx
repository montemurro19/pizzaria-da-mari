import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export const Button = ({ text, onClick }) => {
  return (
    <button className="px-4 py-2" onClick={onClick}>
      {text}
    </button>
  );
};

export const NavbarButton = ({ text, endpoint }) => {
  return (
    <Link className="text-lime-900" href={endpoint}>
      {text}
    </Link>
  );
};

export const CardButton = ({ text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-lime-900 text-amber-100"
      onClick={onClick}
    >
      <ShoppingCartIcon className="w-6 h-6" />
      {text}
    </button>
  );
};
