import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav className="flex flex-col">
      <ul className="mb-4">
        <li className="text-2xl pb-2">
          <Link href="/">Inicio</Link>
        </li>
        <li className="text-2xl pb-2">Explorar</li>
        <li className="text-2xl pb-2">Perfil</li>
      </ul>
      <button className="button-primary">Postear</button>
    </nav>
  );
};

export default Menu;
