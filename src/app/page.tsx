import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>Hola MUndo</p>
      <div>
        <Link href='/users'>Ir a Usuarios</Link>
      </div>
    </main>
  );
}
