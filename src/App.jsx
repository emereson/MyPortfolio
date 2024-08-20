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
    </>
  );
}

export default App;
