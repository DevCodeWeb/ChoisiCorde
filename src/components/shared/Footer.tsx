import { Icon } from "@iconify/react";
import phoneFill from "@iconify/icons-eva/phone-fill";
import emailFill from "@iconify/icons-eva/email-fill";
import locationOnRounded from "@iconify/icons-material-symbols/location-on-rounded";

import { Button } from "components/atoms/Button";

export const Footer = () => {
  return (
    <div className="w-screen bg-black ">
      <footer className="py-[32px] flex flex-col gap-[64px]">
        <div className="flex gap-[72px] sm:flex-col md:flex-col">
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
          <div className="flex flex-col items-center gap-[12px]">
            <h3 className="font-blod text-[24px] mb-[12px]">Couverture</h3>
            {["Ardoise", "Zinguerie", "Tuiles", "Isolation"].map((elm, i) => {
              return <h4 className="text-[16px] font-light ">{elm}</h4>;
            })}
          </div>
        </div>
        <div className="flex justify-between sm:flex-col-reverse md:flex-col-reverse sm:gap-[12px] md:gap-[12px]">
          <div className="flex items-center">
            <h5 className="text-[12px]">
              © Copyright 2022 - site développé par{" "}
              <b className="duration-150 cursor-pointer hover:underline hover:text-primary100">
                DevCode
              </b>
            </h5>
          </div>
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
