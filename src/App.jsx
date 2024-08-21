import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="pages_container">
        <AboutMe />
        <Projects />
        <Contacts />
      </div>
      <a
        className="icon_whatsapp"
        href="https://api.whatsapp.com/send/?phone=51927482386&text=¡Hola%2C+buenos+días%21+Estoy+en+busca+de+servicios+de+programación+y+me+preguntaba+si+podrías+ayudarme.+&type=phone_number&app_absent=0"
        target="_blank"
      >
        <img src="/whatsapp.png" alt="contactame por whatsApp" />
      </a>
    </>
  );
}

export default App;
