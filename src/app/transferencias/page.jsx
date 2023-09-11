import React from "react";
import Layout from "../components/Layout";

function transfer() {
  return (
    <div>
      <div className="grid justify-items-center w-full">
        <h1 className="text-center font-bold text-white text-3xl pb-12">
          Transferir
        </h1>
        <form action="" className="">
          <input
            type="number"
            className="p-0 w-64 bg-transparent text-3xl text-white font-bold"
            placeholder="$ 0"
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Numero de cuenta"
            className="p-0 w-64 bg-transparent text-xl text-white font-bold"
          />
        </form>
        <p className="text-gray-400 text-xl pt-8">
          Saldo disponible: $1,200.00
        </p>
        <p className="pt-4 text-white pb-12">
          Ingresa una cantidad de dinero para continuar e ingresa un numero.
        </p>
      </div>
      <Layout />
    </div>
  );
}

export default transfer;
