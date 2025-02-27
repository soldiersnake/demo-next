import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="flex justify-between mb-4 px-8 py-4 bg-white">
        <div>Logo</div>
        <div>
          <div className="flex">
            <Link href={"/users"}></Link>
          </div>
          <div className="ml-4">
            <Link href={"/messages"}></Link>
          </div>
        </div>
        ENCABEZADO MAIN
      </header>
      <main>{children}</main>
      <div>PIE DE PAGINA MAIN</div>
    </>
  );
};

export default UsersLayout;
