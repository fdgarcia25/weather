import "../styles/cityweatherdefault.css";
import Tarjetaclima from "./tarjetaclima";

//nombres para los componentes, claros y entendibles
const DefaultWeather = () => {
  return (
    <div className="DefaultWeather">
      <div className="busqueda">
        <button className="btnsearch">Search for Places</button>
        <button className="btngetlocation">Q</button>
      </div>
      <div className="actualclima">
        <Tarjetaclima></Tarjetaclima>
      </div>
    </div>
  );
};

export default DefaultWeather;
