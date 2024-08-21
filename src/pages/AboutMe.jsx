import React from "react";
import "./pagesStyle/AboutMe.css";
import useIntersectionObserverOnResize from "../hook/useIntersectionObserverOnResize";
const AboutMe = () => {
  useIntersectionObserverOnResize("AboutMe_section1");
  useIntersectionObserverOnResize("AboutMe_section2");
  useIntersectionObserverOnResize("AboutMe_section3");

  document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const scrollMultiplier = scrollPosition / windowHeight;

    const imageContainer1 = document.querySelector(".AboutMe_images_container");
    const imageContainer2 = document.querySelector(".AboutMe_image2_container");
    const imageContainer3 = document.querySelector(".AboutMe_image3_container");

    if (scrollMultiplier < 0.8) {
      imageContainer1.style.opacity = "0";
      imageContainer1.style.transform = `translateY(50%)`;
    } else {
      imageContainer1.style.opacity = "1";
      imageContainer1.style.transform = `translateY(0%)`;
    }
    if (scrollMultiplier > 1.02) {
      imageContainer2.style.transform = `translateY(${
        100 - (scrollMultiplier - 1) * 100
      }%)`;
      imageContainer2.style.zIndex = `3`;
    } else {
      imageContainer2.style.transform = `translateY(110%)`;
    }
    if (scrollMultiplier > 1.99) {
      imageContainer2.style.transform = `translateY(0%)`;
    }
    if (scrollMultiplier > 2.04) {
      imageContainer3.style.transform = `translateY(${
        100 - (scrollMultiplier - 2) * 100
      }%)`;
      imageContainer3.style.zIndex = `4`;
    } else {
      imageContainer3.style.transform = `translateY(110%)`;
      imageContainer3.style.zIndex = `1`;
    }
    if (scrollMultiplier > 2.99) {
      imageContainer3.style.transform = `translateY(0%)`;
    }
    if (scrollMultiplier > 3.2) {
      imageContainer1.style.transform = `translateY(-50%)`;
      imageContainer1.style.opacity = "0";
      imageContainer1.style.visibility = `hidden`;
    } else {
      imageContainer1.style.visibility = `visible`;
    }
  });

  return (
    <div className="AboutMe_container" id="aboutme">
      <div className="AboutMe_sectionsContainer">
        <section
          className="AboutMe_section AboutMe_sectionOne"
          id="AboutMe_section1"
        >
          <h2>Sobre Mí</h2>
          <div className="AboutMe_sectionOne_text">
            <p>
              ¡Hola! Soy Emerson, un apasionado Programador y Desarrollador Web
              Full Stack.
            </p>

            <p>
              La programación no es solo mi profesión, es mi pasión. Cada día me
              sumerjo más en este fascinante mundo, siempre buscando nuevas
              formas de innovar y mejorar.
            </p>

            <p>
              Actualmente, trabajo como freelancer, donde he tenido el
              privilegio de colaborar en diversos proyectos que me han permitido
              afinar mis habilidades.
            </p>

            <p>
              Estoy en constante búsqueda de oportunidades para unirme a un
              equipo dinámico y contribuir con mis conocimientos a proyectos
              desafiantes.
            </p>
          </div>
          <div className="AboutMe_sectionOne_text2">
            <div className="AboutMe_sectionOne_text2_div">
              <span>1+</span>
              <p>
                Años de <br />
                experiencia
              </p>
            </div>
            <div className="AboutMe_sectionOne_text2_div">
              <span>10+</span>
              <p>
                Proyectos <br />
                completados
              </p>
            </div>
          </div>
          <div className="AboutMe_sectionOne_buttons_container">
            <button className="AboutMe_sectionOne_button">
              Descargar CV <i class="bx bxs-file-doc"></i>
            </button>
            <button className="AboutMe_sectionOne_button">
              <a href="#AboutMe_section2">
                Mis Habilidades <i class="bx bx-down-arrow-alt"></i>
              </a>
            </button>
          </div>

          <div className="AboutMe_image1_section AboutMe_image AboutMe_image_section ">
            <img src="/aboutMe1.webp" alt="" />
          </div>
        </section>
        <section
          className="AboutMe_section AboutMe_sectionTwo"
          id="AboutMe_section2"
        >
          <h2>Mis Habilidades</h2>
          <ul className="skills__ul">
            <li className="skills__li javascript">
              <i className="bx bxl-javascript"></i>
              <p>JavaScript</p>
            </li>
            <li className="skills__li html5">
              <i className="bx bxl-html5"></i>
              <p>Html</p>
            </li>
            <li className="skills__li css3">
              <i className="bx bxl-css3"></i>
              <p>Css</p>
            </li>
            <li className="skills__li react">
              <i className="bx bxl-react"></i>
              <p>React js</p>
            </li>
            <li className="skills__li postgresql">
              <i className="bx bxl-flutter"></i>
              <p>Flutter</p>
            </li>
            <li className="skills__li angular">
              <i className="bx bxl-angular"></i>
              <p>Angular</p>
            </li>
            <li className="skills__li bootstrap">
              <i className="bx bxl-bootstrap"></i>
              <p>Bootstrap</p>
            </li>
            <li className="skills__li nodejs">
              <i className="bx bxl-nodejs"></i>
              <p>Node Js</p>
            </li>
            <li className="skills__li postgresql">
              <i className="bx bxl-postgresql"></i>
              <p>Postgre SQL</p>
            </li>
            <li className="skills__li php">
              <i className="bx bxl-php"></i>
              <p>php</p>
            </li>
            <li className="skills__li html5">
              <i className="bx bxl-python"></i>
              <p>Python</p>
            </li>
            <li className="skills__li react">
              <i className="bx bxl-wordpress"></i>
              <p>Wordpress</p>
            </li>
            <li className="skills__li vuejs">
              <i className="bx bxl-vuejs"></i>
              <p>Vue Js</p>
            </li>
          </ul>

          <button className="AboutMe_sectionTwo_button">
            <a href="#AboutMe_section3">
              Mis Estudios <i class="bx bx-chevron-down"></i>
            </a>
          </button>
          <div className="AboutMe_image2_section AboutMe_image AboutMe_image_section">
            <img src="/aboutMe2.webp" alt="" />
          </div>
        </section>
        <section
          className="AboutMe_section AboutMe_sectionThree"
          id="AboutMe_section3"
        >
          <h2>Estudios y Experiencia</h2>

          <div className="AboutMe_sectionThree_formation">
            <h3>Formación Académica y Profesional</h3>
            <ul>
              <div className="AboutMe_sectionThree_formation_div">
                <span></span>
              </div>

              <li>
                <span></span>
                <h4>Ingeniería de Software 2018 - 2023</h4>
                <p>
                  Durante mi formación en Ingeniería de Software, adquirí una
                  base sólida en desarrollo de software, con un enfoque especial
                  en la implementación de inteligencia artificial y la
                  optimización de procesos a través de soluciones tecnológicas
                  innovadoras.
                </p>
              </li>

              <li>
                <span></span>
                <h4>Bootcamps 2022 - 2023</h4>
                <p>
                  Certificación en Bootcamps de Desarrollo Full-Stack Web, con
                  enfoque en tecnologías modernas y metodologías ágiles. Aquí,
                  perfeccioné mis habilidades técnicas y aprendí a trabajar en
                  equipos colaborativos y dinámicos para entregar proyectos de
                  alta calidad en plazos ajustados.
                </p>
              </li>

              <li>
                <span></span>
                <h4>Autodidacta 2022 - &infin;</h4>
                <p>
                  Mi espíritu autodidacta me ha llevado a una búsqueda constante
                  de conocimiento, manteniéndome al día con las últimas
                  tendencias y tecnologías del sector. Esta mentalidad proactiva
                  me permite adaptarme rápidamente a nuevos desafíos y aportar
                  soluciones creativas e innovadoras en cada proyecto.
                </p>
              </li>
            </ul>
          </div>

          <div className="AboutMe_sectionThree_formation">
            <h3>Experiencia Laboral</h3>
            <ul>
              <div className="AboutMe_sectionThree_formation_div">
                <span></span>
              </div>

              <li>
                <span></span>
                <h4>Programador Freelancer 2023 - 2024;</h4>
                <p>
                  {" "}
                  Más de un año de experiencia como Programador Freelancer,
                  desarrollando soluciones personalizadas y adaptadas a las
                  necesidades del cliente.
                </p>
              </li>
              <li>
                <h4>Colaboraciones 2022 - 2024;</h4>
                <p>
                  {" "}
                  Participación en proyectos web y móviles, destacando en la
                  creación de interfaces intuitivas y funcionalidades robustas
                  que maximizan la experiencia del usuario.
                </p>
              </li>
            </ul>
          </div>

          <div className="AboutMe_sectionOne_buttons_container">
            <button className="AboutMe_sectionThree_button">
              Descargar CV <i class="bx bxs-file-doc"></i>
            </button>
            <button className="AboutMe_sectionThree_button">
              <a href="#projects">
                Poyectos <i class="bx bxs-briefcase"></i>
              </a>
            </button>
          </div>

          <div className="AboutMe_image3_section AboutMe_image AboutMe_image_section ">
            <img src="/aboutMe3.webp" alt="" />
          </div>
        </section>
      </div>
      <div className="AboutMe_images_container">
        <div className="AboutMe_images_container_relative">
          <div className="AboutMe_image1_container AboutMe_image">
            <img src="/aboutMe1.webp" alt="" />
          </div>
          <div className="AboutMe_image2_container AboutMe_image">
            <img src="/aboutMe2.webp" alt="" />
          </div>
          <div className="AboutMe_image3_container AboutMe_image">
            <img src="/aboutMe3.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
