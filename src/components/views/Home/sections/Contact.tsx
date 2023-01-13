/* eslint-disable @next/next/no-img-element */
import { Button } from "components/atoms/Button";
import { Input, TextArea } from "components/atoms/Inputs";
import { useState } from "react";

export const Contact = () => {
  const [contactWay, setContactWay] = useState("call");
  return (
    <section className="bg-primary100">
      {contactWay === "call" ? (
        <div className="col-span-12 flex gap-[64px]">
          <img src="assets/call.jpg" alt="" />
          <div className="flex flex-col justify-center gap-[32px]">
            <h3>Contactez-nous</h3>
            <h2 className="text-[40px] font-bold">
              Appelez <u>Choisi Corde</u>
              <br />
              au 07 51 66 97 01
            </h2>
            <div className="flex gap-[24px]">
              <Button label="Appeler maintenant" />
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
          <img src="assets/write.jpg" alt="" />
          <div className="flex flex-col justify-center gap-[32px]">
            <h3>Contactez-nous</h3>
            <h2 className="text-[40px] font-bold">Demander votre devis</h2>
            <div className="flex gap-[24px]">
              <Input placeholder="Prénom *" />
              <Input placeholder="Nom *" />
            </div>
            <div className="flex gap-[24px]">
              <Input placeholder="Email *" />
              <Input placeholder="Téléphone *" />
            </div>
            <TextArea placeholder="Votre message *" />
            <div className="flex gap-[24px]">
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
  );
};
