import Link from "next/link";
export default function BotonOpcion({ text, ruta }) {
  return (
    <div className="grid justify-items-center bg-sky-500 text-white pt-10 pb-10 text-3xl border rounded cursor-pointer ">
      <Link href={ruta}>
        {""}
        <p>{text}</p>
        {""}
      </Link>
    </div>
  );
}
