import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
  FaDiscord,
} from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const tempId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${serviceId}`, `${tempId}`, form.current, `${publicKey}`)
      .then(
        (result) => {
          setStatusMessage("Email Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-container">
      <div className="background-image">
        <img
          className="background-image"
          src="background-images/contact-background.png"
          alt=""
        />
      </div>
      <div className="form-card">
        <h1 className="contact-title">Contact Me</h1>
        <form className="form-container" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className="input-field" type="text" name="name" />
          <label>Email</label>
          <input className="input-field" type="email" name="email" />
          <label>Message</label>
          <textarea className="input-field text-area" name="message" />
          <input className="btn" type="submit" value="Submit" />
        </form>
        <p className="dialog-box">{statusMessage}</p>
      </div>
      <div className="social-card">
        <span>Social</span>
        <a className="social-link" href="#">
          <FaLinkedin color="black" />
        </a>
        <a className="social-link" href="#">
          <FaFacebookSquare color="black" />
        </a>
        <a className="social-link" href="#">
          <FaDiscord color="black" />
        </a>
        <a className="social-link" href="#">
          <FaGithubSquare color="black" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
