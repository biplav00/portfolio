import React, { useRef } from "react";
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z8uboif",
        "template_cmrvk63",
        form.current,
        "gdnSEmL2OE5A3GCjc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent!!");
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
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className="input-field" type="text" name="name" />
          <label>Email</label>
          <input className="input-field" type="email" name="email" />
          <label>Message</label>
          <textarea className="input-field text-area" name="message" />
          <input className="btn" type="submit" value="Submit" />
        </form>
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
