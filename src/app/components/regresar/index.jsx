import Link from "next/link";

export default function Regresar() {
  return (
    <div>
      <Link
        className="text-white bg-sky-500 font-bold text-xl p-5 rounded-xl hover:bg-sky-600"
        href="/"
      >
        {" "}
        Regresar{" "}
      </Link>
    </div>
  );
}
