import "../styles/cityweatherdefault.css";
import Tarjetaclima from "./tarjetaclima";
import DefaultWeather3 from "./cityweatherdefault3";

//nombres para los componentes, claros y entendibles
const DefaultWeather2 = () => {
  return (
    <div className="DefaultWeather2">
      <div className="busqueda2">
        <button className="btnsearch2">search</button>
        <button className="btngetlocation2">getlocation</button>
      </div>

      <div className="tarjetas">
        {/* //pasar un props para saber que tarjeta es cada una y que dia es */}
        <Tarjetaclima></Tarjetaclima>
        <Tarjetaclima></Tarjetaclima>
        <Tarjetaclima></Tarjetaclima>
        <Tarjetaclima></Tarjetaclima>
        <Tarjetaclima></Tarjetaclima>
      </div>
      <DefaultWeather3></DefaultWeather3>
    </div>
  );
};

export default DefaultWeather2;
