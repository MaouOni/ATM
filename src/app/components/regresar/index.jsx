import Link from "next/link";

export default function Regresar() {
  return (
    <div>
      <Link className='text-white bg-red-700 font-bold uppercase text-3xl p-5 border rounded w-60' href="/pantalla-exito" > regresar al menu </Link>
    </div>
  );
}
