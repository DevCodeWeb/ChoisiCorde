/* eslint-disable @next/next/no-img-element */
import { Button } from "components/atoms/Button";
import { Input, TextArea } from "components/atoms/Inputs";
import { useState } from "react";

export const Contact = () => {
  const [contactWay, setContactWay] = useState("call");
  return (
    <div className="w-screen bg-primary100">
      <section>
        {contactWay === "call" ? (
          <div className="col-span-12 flex gap-[64px]">
            <img src="assets/call.jpg" alt="" className="sm:hidden md:hidden" />
            <div className="flex flex-col justify-center gap-[32px] sm:py-[32px] md:py-[32px] w-full">
              <h3>Contactez-nous</h3>
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
              <div className="flex gap-[24px] sm:flex-col md:flex-col">
                <a href="tel:0751669701">
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
          <div className="col-span-12 flex gap-[64px]">
            <img
              src="assets/write.jpg"
              alt=""
              className="sm:hidden md:hidden"
            />
            <div className="flex flex-col justify-center gap-[32px] sm:py-[32px] md:py-[32px] w-full">
              <h3>Contactez-nous</h3>
              <h2 className="text-[40px] font-bold">Demander votre devis</h2>
              <div className="flex sm:flex-col md:flex-col gap-[24px]">
                <Input placeholder="Prénom *" />
                <Input placeholder="Nom *" />
              </div>
              <div className="flex  sm:flex-col md:flex-col  gap-[24px]">
                <Input placeholder="Email *" />
                <Input placeholder="Téléphone *" />
              </div>
              <TextArea placeholder="Votre message *" />
              <div className="flex gap-[24px] sm:flex-col md:flex-col">
                <Button
                  label="Appeler"
                  onClick={() => {
                    setContactWay("call");
                  }}
                />
                <Button
                  label="Envoyer"
                  onClick={() => {
                    setContactWay("write");
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
