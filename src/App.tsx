import "./App.css";
import Chess from "./component/chess/Chess";
import RequestedDataShow from "./component/request/RequestedDataShow";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Chess />
        </div>
        <div>
          <RequestedDataShow />
        </div>
      </div>
    </div>
  );
}

export default App;
