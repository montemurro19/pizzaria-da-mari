import Link from "next/link";

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
