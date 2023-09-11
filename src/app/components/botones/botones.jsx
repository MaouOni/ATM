import Link from "next/link";
export default function BotonOpcion({ text, ruta }) {
  return (
    <div className="grid justify-items-center bg-sky-500 text-white pt-10 pb-10 text-xl hover:bg-sky-600 cursor-pointer">
      <Link href={ruta}>
        {""}
        <p>{text}</p>
        {""}
      </Link>
    </div>
  );
}
