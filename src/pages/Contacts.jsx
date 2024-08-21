import React, { useRef, useState } from "react";
import "./pagesStyle/Contacts.css";
import emailjs from "@emailjs/browser";
import useIntersectionObserverOnResize from "../hook/useIntersectionObserverOnResize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const formRef = useRef();
  const [inputsLength, setInputsLength] = useState({});
  useIntersectionObserverOnResize("contact_img");
  useIntersectionObserverOnResize("contact__section_two_img");
  useIntersectionObserverOnResize("contact__form");

  const handleInputChange = (fieldName, value) => {
    setInputsLength({ ...inputsLength, [fieldName]: value.length });
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form submission
    const form = formRef.current;

    emailjs
      .sendForm(
        "service_4jm7prj",
        "template_jklu78m",
        form,
        "_3jiepsyN18d8ZuGd"
      )
      .then((result) => {
        form.reset();
        toast("💌 El Correo se envio exitosamente 📩", {
          position: "bottom-right",
          autoClose: 3001,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact_container" id="contacts">
      <ToastContainer />
      <div className="contact_img" id="contact_img">
        <img src="/projects1.webp" alt="" />
        <article className="contact_img_article">
          <h2>Contáctame</h2>
          <img src="/flecha.png" alt="" />
        </article>
      </div>
      <div className="contact_intro">
        <section className="contact__section_two">
          <div
            className="contact__section_two_img"
            id="contact__section_two_img"
          >
            <img src="/contact.webp" alt="" />
          </div>
          <form
            onSubmit={sendEmail}
            ref={formRef}
            className="contact__form"
            id="contact__form"
          >
            <h2>Enviame un Correo</h2>
            <div className="contactForm__Div">
              <label
                htmlFor="name"
                className={` contactForm__DivLabel ${
                  inputsLength?.address > 0
                    ? "contactForm__DivLabel__animation"
                    : ""
                }`}
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>
            <div className="contactForm__Div">
              <label
                htmlFor="email"
                className={` contactForm__DivLabel ${
                  inputsLength?.email > 0
                    ? "contactForm__DivLabel__animation"
                    : ""
                }`}
              >
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div className="contactForm__Div">
              <label
                htmlFor="phoneNumber"
                className={` contactForm__DivLabel ${
                  inputsLength?.phoneNumber > 0
                    ? "contactForm__DivLabel__animation"
                    : ""
                }`}
              >
                WhatsApp
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                required
              />
            </div>
            <div className="contactForm__Div">
              <label
                htmlFor="typeEvent"
                className={` contactForm__DivLabel ${
                  inputsLength?.typeEvent > 0
                    ? "contactForm__DivLabel__animation"
                    : ""
                }`}
              >
                Asunto
              </label>
              <input
                id="typeEvent"
                name="typeEvent"
                type="text"
                onChange={(e) => handleInputChange("typeEvent", e.target.value)}
                required
              />
            </div>
            <div
              className="contactForm__Div"
              style={{ width: "calc(100% - 1em)", marginTop: "1 em" }}
            >
              <label
                htmlFor="message"
                className={` contactForm__DivLabel ${
                  inputsLength?.message > 0
                    ? "contactForm__DivLabel__animation2"
                    : ""
                }`}
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                cols="50"
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              />
            </div>
            <button type="submit">ENVIAR</button>
          </form>
        </section>

        <section className="contact__section_three">
          <h2>Mis Redes Sociales</h2>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100087974955688"
                target="_blank"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=51927482386&text=¡Hola%2C+buenos+días%21+Estoy+en+busca+de+servicios+de+programación+y+me+preguntaba+si+podrías+ayudarme.+&type=phone_number&app_absent=0"
                target="_blank"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/emerson-yujra-997b52260"
                target="_blank"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/tudeveloper?s=21" target="_blank">
                <i class="bx bxl-twitter"></i>{" "}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
