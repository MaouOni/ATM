import Link from "next/link";

export default function Modal() {
  return (
    <div className="grid w-full justify-items-center fixed">
      <div className="grid w-3/6 border rounded-xl shadow-xl bg-white p-8 justify-items-center">
        <h1 className="text-center text-4xl pb-4">Operación Exitosa</h1>
        <p className="text-center pb-4">
          La operación se ha completado con éxito. Los cambios se han guardado
          correctamente.
        </p>
        <button className="p-4 bg-sky-500 w-2/6 rounded-xl hover:bg-sky-600">
          <Link href="/">Volar a incio</Link>
        </button>
      </div>
    </div>
  );
}
