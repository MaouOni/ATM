import Layout from "../components/Layout";

function Retiro() {
  return (
    <div>
      <div className="grid justify-items-center z-0">
        <h1 className="text-center font-bold text-white text-3xl pb-12">
          Retirar
        </h1>
        <form action="">
          <input
            type="number"
            className="p-0 w-64 bg-transparent text-3xl"
            placeholder="$ 0"
          />
        </form>
        <p className="text-gray-400 text-xl pt-8">
          Saldo disponible: $1,200.00
        </p>
        <p className="pt-4 text-white pb-12">
          Ingresa una cantidad de dinero para continuar{" "}
        </p>
      </div>
      <Layout />
    </div>
  );
}

export default Retiro; // Asegúrate de que la exportación del componente tenga la primera letra en mayúscula
