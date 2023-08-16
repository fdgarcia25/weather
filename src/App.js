import "./App.css";
import DefaultWeather from "./componentes/cityweatherdefault";
import DefaultWeather2 from "./componentes/cityweatherdefault2";
import DefaultWeather3 from "./componentes/cityweatherdefault3";

function App() {
  return (
    <div className="App">
      <div className="left-body">
        <DefaultWeather />
      </div>
      <div className="right-body">
        <DefaultWeather2></DefaultWeather2>
      </div>
    </div>
  );
}

export default App;
