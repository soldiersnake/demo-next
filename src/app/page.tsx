import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <p>Hola MUndo</p>
      <div>
        <Link href="/users">Ir a Usuarios</Link>
      </div>
    </main>
  );
}
