import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [locationLink, setLocationLink] = useState("home");
  const [menuClose, setmenuClose] = useState(true);

  const toggleMenuClose = () => {
    setmenuClose(!menuClose);
  };
  useEffect(() => {
    let isScrolling;
    const home = document.getElementById("home");
    const aboutme = document.getElementById("aboutme");
    const projects = document.getElementById("projects");
    const contacts = document.getElementById("contacts");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const headerContainer = document.querySelector(".header_container");

      const scrollMultiplier = scrollPosition / windowHeight;

      if (scrollMultiplier > 0.85) {
        headerContainer.classList.add("header_active", "scrolling");
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          headerContainer.classList.remove("scrolling");
        }, 150);

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setLocationLink(entry.target.id);
            }
          });
        });
        observer.observe(home);
        observer.observe(aboutme);
        observer.observe(projects);
        observer.observe(contacts);
      } else {
        setLocationLink("home");
        headerContainer.classList.remove("header_active");
      }
    };

    // Añadir el evento de scroll
    document.addEventListener("scroll", handleScroll);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header_container">
      <nav>
        <div className="header_logo">
          <a
            href="#home"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setmenuClose(true);
            }}
          >
            Emerson
          </a>
        </div>
        <ul className={`header_ul  ${menuClose ? "headerUl__show" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                toggleMenuClose();
              }}
              className={locationLink === "home" ? "activeLink" : ""}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#aboutme"
              className={locationLink === "aboutme" ? "activeLink" : ""}
              onClick={toggleMenuClose}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={locationLink === "projects" ? "activeLink" : ""}
              onClick={toggleMenuClose}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className={locationLink === "contacts" ? "activeLink" : ""}
              onClick={toggleMenuClose}
            >
              Contáctame
            </a>
          </li>
        </ul>
        {menuClose ? (
          <i className="bx bx-menu menuclose" onClick={toggleMenuClose}></i>
        ) : (
          <i
            className="bx bxs-x-circle menuclose"
            onClick={toggleMenuClose}
          ></i>
        )}
      </nav>
    </header>
  );
};

export default Header;
