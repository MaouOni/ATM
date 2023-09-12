import Link from "next/link";

export default function Continuar() {
  return (
    <div>
      <Link
        className="text-white bg-fuchsia-600 font-bold text-xl p-5 rounded-xl hover:bg-fuchsia-700"
        href="/modal"
      >
        {" "}
        Continuar{" "}
      </Link>
    </div>
  );
}
