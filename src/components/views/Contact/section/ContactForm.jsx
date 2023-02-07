/* eslint-disable @next/next/no-img-element */
import { Button } from "components/atoms/Button";
import { Input, Select, TextArea } from "components/atoms/Inputs";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { interventions } from "data/interventions";

export const ContactForm = () => {
  const [send, setSend] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
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
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="mb-[150px]">
      <div className="col-span-12 flex gap-[24px]">
        <img
          src="assets/write.jpg"
          alt=""
          className="sm:hidden md:hidden rounded-2xl"
        />
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col justify-center gap-[24px] sm:py-[32px] md:py-[32px] py-[32px] w-full h-full">
            <div className="flex flex-col justify-center h-full">
              <p>
                Afin de répondre au mieux à votre demande, merci de remplir tous
                les champs ci-après :
              </p>
            </div>
            {send ? (
              <p className="text-orange text-[20px] col-span-12">
                Nous avons bien reçu votre message !
              </p>
            ) : (
              <div className="flex flex-col gap-[24px]">
                <div className="flex sm:flex-col md:flex-col gap-[24px]">
                  <Input
                    placeholder="Jean"
                    label="Prénom"
                    name="firstname"
                    required
                    pattern="[a-zA-Z]{2-20}"
                  />
                  <Input
                    placeholder="Dupont"
                    label="Nom"
                    name="lastname"
                    required
                    pattern="[a-zA-Z]{2-20}"
                  />
                </div>
                <div className="flex  sm:flex-col md:flex-col  gap-[24px]">
                  <Input
                    placeholder="jeandupont@gmail.com"
                    label="Email"
                    name="email"
                    required
                    pattern="[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,8}?"
                  />
                  <Input
                    placeholder="06 45 35 05 64"
                    label="Téléphone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                  />
                </div>
                <Select
                  label="Nature de votre demande"
                  placeholder="Nature de votre demande *"
                  name="intervention"
                  required
                  data={interventions}
                />
                <TextArea
                  label="Votre message"
                  placeholder="Écrivez ici ..."
                  name="message"
                />
              </div>
            )}
            <div className="flex gap-[24px] sm:flex-col md:flex-col w-full">
              {send === false ? (
                <Button
                  label="Envoyer"
                  disabled={disabled}
                  onClick={() => {
                    sendEmail;
                  }}
                />
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
