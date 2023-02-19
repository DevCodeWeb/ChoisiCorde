/* eslint-disable @next/next/no-img-element */
import { Button } from "components/atoms/Button";
import { Input, Select, TextArea } from "components/atoms/Inputs";
import { useState } from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { interventions } from "data/interventions";

export const ContactForm = () => {
  const [send, setSend] = useState(false);
  const [load, setLoad] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setLoad(true);
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
          setLoad(false);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-primary100 xs:px-[12px] sm:px-[12px]">
      <div className="col-span-12 flex gap-[24px]">
        <img
          src="assets/write.jpg"
          alt=""
          className="xs:hidden sm:hidden md:hidden"
        />
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col justify-center gap-[24px] xs:pt-[32px] sm:pt`-[32px] md:py-[32px] pt-[32px] w-full h-full">
            <div className="flex flex-col justify-center h-full xs:text-center sm:text-center">
              <h2 className="text-[40px] font-bold  xs:text-[20px] xs:hidden sm:hidden">
                Écrivez-nous
              </h2>
              <p>
                Afin de répondre au mieux à votre demande, merci de remplir les
                champs ci-après :
              </p>
            </div>
            {send ? (
              <p className="text-orange text-[20px] col-span-12">
                Nous avons bien reçu votre message !
                <br />
                Nous tâcherons de revenir vers vous dans les plus brefs délai.
              </p>
            ) : (
              <div className="flex flex-col gap-[24px]">
                <div className="flex xs:flex-col sm:flex-col md:flex-col gap-[24px]">
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
                <div className="flex  xs:flex-col  sm:flex-col md:flex-col  gap-[24px]">
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
            <div className="flex gap-[24px]  xs:flex-col sm:flex-col md:flex-col w-full">
              {send === false ? (
                <Button
                  label={load ? "En cours d'envoi..." : "Envoyer"}
                  onClick={() => {
                    sendEmail;
                  }}
                />
              ) : null}
            </div>
          </div>
        </form>
      </div>
      <div className="col-span-12 mb-[32px]">
        <a href="tel:0751669701">
          <Button label="Appeler le 07 51 66 97 01" />
        </a>
      </div>
    </section>
  );
};
