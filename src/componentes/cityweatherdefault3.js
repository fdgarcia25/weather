import "../styles/cityweatherdefault.css";
import Tarjetaclima from "./tarjetaclima";

//nombres para los componentes, claros y entendibles
const DefaultWeather3 = () => {
  return (
    <div className="DefaultWeather3">
      <div className="titulo">
        <h1>hightlights</h1>
      </div>
      <div className="tarjetas">
        <Tarjetaclima></Tarjetaclima>
        <Tarjetaclima></Tarjetaclima>
        <Tarjetaclima></Tarjetaclima>
        <Tarjetaclima></Tarjetaclima>
      </div>
    </div>
  );
};

export default DefaultWeather3;
