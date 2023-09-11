import React from "react";
import Layout from "../components/Layout";
import DatosTexto from "../components/datosTexto/datosTexto";

export default function consulta() {
  return (
    <div>
      <div>
        <DatosTexto titulo={"Bienvedio"} dato={"Diego"} ></DatosTexto>
      </div>
      <Layout />
    </div>
  );
}