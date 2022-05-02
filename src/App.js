import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
