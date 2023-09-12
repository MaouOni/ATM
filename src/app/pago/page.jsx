import React from "react";
import Layout from "../components/Layout";

function Pago() {
  return (
    <>
      <div className="grid justify-items-center w-full">
        <h1 className="text-center font-bold text-white text-3xl pb-12">
          Pago de servicio
        </h1>
        <form action="" className="">
          <select name="" id="" className="p-4 w-full rounded-xl">
            <option value="">Luz</option>
            <option value="">Internet</option>
            <option value="">Teléfono</option>
            <option value="">Agua</option>
          </select>
          <br />
          <br />
        </form>
        <p className="text-gray-400 text-xl pt-8">
          Saldo disponible: $1,200.00
        </p>
        <p className="pt-4 text-white pb-12">Seleccione un servicio.</p>
      </div>
      <Layout />
    </>
  );
}

export default Pago;
