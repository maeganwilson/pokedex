import "./App.css";
import LeftSide from "./components/InnerRectangle";

function App() {
  return (
    <div className="App">
      <div className="TopLeftButtons">
        <div className="OuterCircle">
          <div className="InnerCircle"></div>
        </div>
      </div>
      <LeftSide/>
    </div>
  );
}

export default App;
