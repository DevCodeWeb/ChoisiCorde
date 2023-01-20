/* eslint-disable @next/next/no-img-element */
import { scrollTo } from "helper/ScrollTo";
import { Button } from "../../../atoms/Button";

export const HeadView = () => {
  const goToContact = () => {
    window.scrollTo(0, 7000);
  };

  return (
    <section className="relative w-screen">
      <img
        src="assets/HeadView.jpg"
        alt="Cordiste"
        className="w-full col-span-12 rounded-2xl aspect-auto sm:block md:block hidden pt-[70px]"
      />
      <div className="flex flex-col col-span-6 sm:text-center sm:col-span-12  md:text-center md:col-span-12 pt-[250px] sm:pt-0 md:pt-0">
        <h1 className="font-bold text-[48px]">Choisi Corde</h1>
        <h2 className="font-semibold text-[32px]">Trop haut pour toi ?</h2>
        <p className="text-[24px]">
          Ne prends pas de risques <b>Choisi Corde</b> est là pour tous tes
          travaux d’accès difficile
        </p>
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
          <p>Paris - Île de France - Oise</p>
        </div>
      </div>
      <div className="h-full col-span-6">
        <img
          src="assets/HeadView.jpg"
          alt="Cordiste"
          className=" pt-[130px] md:hidden sm:hidden lg:block xl:block xxl:block w-full aspect-auto"
        />
      </div>
    </section>
  );
};
