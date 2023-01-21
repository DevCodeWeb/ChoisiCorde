import { useRef } from "react";

// EmailJs
import emailjs from "@emailjs/browser";

export const form = useRef();

export const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_f0siv5h",
      "template_aehh188",
      form.current,
      "zC8v0ekxMM9n5eVur"
    )
    .then(
      (result) => {
        console.log("the message was send");
      },
      (error) => {
        console.log(error.text);
      }
    );
};
