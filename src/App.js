import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
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
      <Services/>
      <Education/>
      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;
