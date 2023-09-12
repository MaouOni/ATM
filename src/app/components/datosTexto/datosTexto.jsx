export default function DatosTexto({ titulo, dato }) {
  return (
    <div className="pb-4 pl-8">
      <p className="text-sky-500 text-2x">{titulo}</p>
      <p className="text-white text-2xl font-bold">{dato}</p>
    </div>
  );
}
