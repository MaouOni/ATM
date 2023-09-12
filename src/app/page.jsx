import BotonOpcion from "./components/botones/botones";
import DatosTexto from "./components/datosTexto/datosTexto";

export default function Home() {
  return (
    <>
      <div className=" grid h-full m-5 place-items-center">
        <div className="grid grid-cols-1 gap-4 w-full h-full md:grid-cols-2">
          <div className="w-full">
            <DatosTexto titulo={"Bienvenido"} dato={"Diego Tapia"}></DatosTexto>
            <DatosTexto titulo={"Saldo"} dato={"$1,200.90"}></DatosTexto>
          </div>
          <div className="grid grid-cols-1 gap-4  w-full md:grid-cols-2 pr-8">
            <BotonOpcion text={"Retirar"} ruta={"/retirar"}></BotonOpcion>
            <BotonOpcion
              text={"Transferir"}
              ruta={"/transferencias"}
            ></BotonOpcion>
            <BotonOpcion text={"Depositar"} ruta={"/deposito"}></BotonOpcion>
            <BotonOpcion text={"Pagar"} ruta={"/pago"}></BotonOpcion>
          </div>
        </div>
      </div>
    </>
  );
}
