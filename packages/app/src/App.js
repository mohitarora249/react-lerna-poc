import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-components";
function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log("HELLO")} title="click me" />
    </div>
  );
}

export default App;
