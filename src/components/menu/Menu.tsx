import { LinkType } from "@/types/link.types";
import Link from "next/link";
import React from "react";

type MenuProps = {
  links: LinkType[]
}

const Menu = ({ links }: MenuProps) => {
  return (
    <nav className="flex flex-col w-full">
      <ul className="mb-4 w-full">
        {
          links && links.map((link, index) =>
            <li className="p-2 text-2xl w-full hover:bg-blue-400 hover:text-white">
              <Link key={index} href={link.href} className="p-2 w-full flex"  >{link.title}</Link>
            </li>
          )
        }
      </ul>
      <button className="button-primary">Postear</button>
    </nav>
  );
};

export default Menu;
