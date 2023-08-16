import "../styles/cityweatherdefault.css";

//nombres para los componentes, claros y entendibles
const Tarjetaclima = () => {
  return (
    <div className="DefaultWeathert">
      <div className="clima">
        <div className="datosclima">
          <div className="imagen">
            <img
              src="https://www.noaa.gov/sites/default/files/styles/square_width_650/public/2021-02/FocusArea__Weather-02.jpg?h=5dc006f5&itok=20VGa8_F"
              alt=""
            />
          </div>
          <div className="grados">15 grados </div>
          <div className="nombre">lluvia </div>
          <div className="fecha">today </div>
          <div className="lugar">Ireland </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjetaclima;
