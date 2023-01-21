/* eslint-disable @next/next/no-img-element */
import { Button } from "components/atoms/Button";
import { Input, TextArea } from "components/atoms/Inputs";
import { useState } from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [contactWay, setContactWay] = useState("call");
  const [send, setSend] = useState(false);

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
    <div className="w-screen bg-primary100">
      <section>
        {contactWay === "call" ? (
          <div className="col-span-12 flex gap-[64px]">
            <img src="assets/call.jpg" alt="" className="sm:hidden md:hidden" />
            <div className="flex flex-col justify-center gap-[32px] sm:py-[32px] md:py-[32px] w-full">
              <h2 className="text-[40px] sm:text-[28px] font-bold">
                Appelez <u>Choisi Corde</u>
                <br />
                au &nbsp;
                <a href="tel:0751669701">
                  <span className="duration-150 cursor-pointer hover:underline hover:text-orange">
                    07 51 66 97 01
                  </span>
                </a>
              </h2>
              <div className="flex gap-[24px] sm:flex-col md:flex-col w-full">
                <a href="tel:0751669701" className="w-full">
                  <Button label="Appeler maintenant" />
                </a>
                <Button
                  label="Écrire un message"
                  onClick={() => {
                    setContactWay("write");
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="col-span-12 flex gap-[24px]">
            <img
              src="assets/write.jpg"
              alt=""
              className="sm:hidden md:hidden"
            />
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col justify-center gap-[24px] sm:py-[32px] md:py-[32px] py-[32px] w-full h-full">
                <div className="flex flex-col justify-center h-full">
                  <h2 className="text-[40px] font-bold">
                    Demandez votre devis
                  </h2>
                  <p>
                    Afin de répondre au mieux à votre demande, merci de remplir
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
                        placeholder="Prénom *"
                        name="firstname"
                        required
                        pattern="[a-zA-Z]{2-20}"
                      />
                      <Input
                        placeholder="Nom *"
                        name="lastname"
                        required
                        pattern="[a-zA-Z]{2-20}"
                      />
                    </div>
                    <div className="flex  sm:flex-col md:flex-col  gap-[24px]">
                      <Input
                        placeholder="Email *"
                        name="email"
                        required
                        pattern="[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,8}?"
                      />
                      <Input
                        placeholder="Téléphone *"
                        name="phone"
                        required
                        pattern="[0-9]{10}"
                      />
                    </div>
                    <TextArea placeholder="Votre message *" name="message" />
                  </div>
                )}
                <div className="flex gap-[24px] sm:flex-col md:flex-col w-full">
                  <Button
                    label="Appeler"
                    onClick={() => {
                      setContactWay("call");
                      setSend(false);
                    }}
                  />
                  {send === false ? (
                    <Button
                      label="Envoyer"
                      onClick={() => {
                        sendEmail;
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};
