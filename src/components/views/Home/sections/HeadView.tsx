/* eslint-disable @next/next/no-img-element */
import { scrollTo } from "helper/ScrollTo";
import { Button } from "../../../atoms/Button";

import { Icon } from "@iconify/react";
import locationOnRounded from "@iconify/icons-material-symbols/location-on-rounded";

export const HeadView = () => {
  const goToContact = () => {
    window.scrollTo(0, 7000);
  };

  return (
    <div className="bg-headView bg-opacity-10">
      <section className="relative w-screen pb-[250px]">
        <img
          src="assets/HeadView.jpg"
          alt="Cordiste"
          className="w-full col-span-12 rounded-2xl aspect-auto sm:block md:block hidden pt-[70px]"
        />
        <div className="h-full col-span-5 mt-[90px]">
          <img
            src="assets/logoCC.png"
            alt="Cordiste"
            className=" pt-[130px] md:hidden sm:hidden lg:block xl:block xxl:block w-full aspect-auto"
          />
        </div>
        <div className="flex flex-col col-start-7 col-span-5 sm:text-center sm:col-span-12  md:text-center md:col-span-12 pt-[270px] sm:pt-0 md:pt-0">
          <h1 className="font-bold text-[48px]">Choisi Corde</h1>
          <h2 className="font-semibold text-[32px]">Trop haut pour toi ?</h2>
          <p className="text-[24px] mb-[12px]">
            Ne prends pas de risques <b>Choisi Corde</b> est là pour tous tes
            travaux d’accès difficile
          </p>
          <div className="flex gap-[12px] items-center">
            <Icon icon={locationOnRounded} className="w-[24px] h-[24px]" />
            <p>Paris - Île de France - Oise</p>
          </div>
          <div className="mt-[16px] flex gap-[16px] items-center sm:flex-col md:flex-col">
            <Button
              label="Devis gratuit"
              onClick={() => {
                scrollTo(7000);
              }}
            />
            <Button
              label="En savoir plus"
              onClick={() => {
                scrollTo(1000);
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
