import logo from "./logo.svg";
import "./App.css";
import { Artists } from "./Artists";
import { Route, Routes } from "react-router";
import { Albums } from "./Albums";
import { Tracks } from "./Tracks";
import { useSelector } from "react-redux";

function App() {
  const isWaiting = useSelector((state) => state.isWaiting);

  return (
    <div className="App">
      {isWaiting && <div className="spinner" />}
      <Routes>
        <Route path="/" element={<Artists />} />
        <Route path="/albums/:artist" element={<Albums />} />
        <Route path="/tracks" element={<Tracks />} />
      </Routes>
    </div>
  );
}

export default App;
