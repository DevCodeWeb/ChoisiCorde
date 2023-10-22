import { Icon } from "@iconify/react";
import phoneFill from "@iconify/icons-eva/phone-fill";
import emailFill from "@iconify/icons-eva/email-fill";
import locationOnRounded from "@iconify/icons-material-symbols/location-on-rounded";

import { Button } from "components/atoms/Button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-screen text-white bg-black">
      <footer className="py-[32px] flex flex-col gap-[64px] xs:px-[12px] sm:px-[12px]">
        <div className="flex gap-[72px] justify-between xs:flex-col-reverse sm:flex-col-reverse md:flex-col">
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-blod text-[32px] mb-[12px]">Nos coordonnées</h3>
            <a href="tel:0751669701">
              <div className="duration-150 cursor-pointer text-[16px] font-light hover:underline hover:text-primary100 flex items-center gap-[12px]">
                <Icon icon={phoneFill} />
                <h4 className="text-[16px] font-light">
                  <span className="duration-150 cursor-pointer text-[16px] font-light hover:underline hover:text-primary100">
                    07 51 66 97 01
                  </span>
                </h4>
              </div>
            </a>
            <a href="tel:0751669701">
              <div className="duration-150 cursor-pointer text-[16px] font-light hover:underline hover:text-primary100 flex items-center gap-[12px]">
                <Icon icon={emailFill} />
                <h4 className="text-[16px] font-light">
                  <span className="duration-150 cursor-pointer text-[16px] font-light hover:underline hover:text-primary100">
                    choisicorde@gmail.com
                  </span>
                </h4>
              </div>
            </a>
            <div className="flex gap-[12px] items-center text-[16px] font-light">
              <Icon icon={locationOnRounded} />
              <p>Paris - Île de France - Oise</p>
            </div>
          </div>
          <div className="flex gap-[48px] xs:flex-col sm:flex-col xs:items-start sm:items-start">
            <div className="flex flex-col items-center gap-[12px]  xs:items-start sm:items-start">
              <h3 className="font-blod text-[24px] mb-[12px]">En Corde</h3>
              {["Anti-Pigeon", "Nettoyage", "Entretien", "Tags"].map(
                (elm, i) => {
                  return <h4 className="text-[16px] font-light ">{elm}</h4>;
                }
              )}
            </div>
            <div className="flex flex-col items-center gap-[12px]  xs:items-start sm:items-start">
              <h3 className="font-blod text-[24px] mb-[12px]">Couverture</h3>
              {["Ardoise", "Zinguerie", "Tuiles", "Isolation"].map((elm, i) => {
                return <h4 className="text-[16px] font-light ">{elm}</h4>;
              })}
            </div>
            <div className="flex flex-col items-center gap-[12px]  xs:items-start sm:items-start">
              <h3 className="font-blod text-[24px] mb-[12px]">Velux</h3>
              {["Installation", "Conseil", "Entretien"].map((elm, i) => {
                return <h4 className="text-[16px] font-light ">{elm}</h4>;
              })}
            </div>
            <div className="flex flex-col items-center gap-[12px]  xs:items-start  sm:items-start">
              <h3 className="font-blod text-[24px] mb-[12px]">Nuisibles</h3>
              {["Dératisation", "Désinfection", "Désinsectisation"].map(
                (elm, i) => {
                  return <h4 className="text-[16px] font-light ">{elm}</h4>;
                }
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center xs:flex-col-reverse sm:flex-col-reverse md:flex-col-reverse xs:items-center sm:items-center xs:gap-[12px] sm:gap-[12px] md:gap-[12px]">
          <div className="flex items-center">
            <h5 className="text-[12px]">
              © Copyright 2022 - site développé par{" "}
              <b className="duration-150 cursor-pointer">DevCreate</b>
            </h5>
          </div>
          <Link href="mentions-legales">
            <h5 className="text-[12px] duration-150 cursor-pointer hover:text-primary100">
              Mentions légales
            </h5>
          </Link>
          <Link href="politique-confidentialite">
            <h5 className="text-[12px] duration-150 cursor-pointer hover:text-primary100">
              Politique de confidentialité
            </h5>
          </Link>
          <Link href="conditions-utilisation">
            <h5 className="text-[12px] duration-150 cursor-pointer hover:text-primary100">
              Conditions d'utilisation
            </h5>
          </Link>
          <div className="flex items-center gap-[12px] sm:flex-col md:flex-col">
            <h5>Téléphone : 07 51 66 97 01</h5>
            <a href="tel:0751669701">
              <Button label="Appeler" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
