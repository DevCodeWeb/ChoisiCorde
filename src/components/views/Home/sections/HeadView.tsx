/* eslint-disable @next/next/no-img-element */
import { Button } from "../../../atoms/Button";

export const HeadView = () => {
  return (
    <section className="relative w-screen">
      <div className="flex flex-col col-span-6 pt-[250px]">
        <h1 className="font-bold text-[48px]">Choisi Corde</h1>
        <h2 className="font-semibold text-[32px]">Trop haut pour toi ?</h2>
        <p className="text-[24px]">
          Ne prends pas de risques <b>Choisi Corde</b> est là pour tous tes
          travaux d’accès difficile
        </p>
        <div className="mt-[16px] flex gap-[16px] items-center">
          <Button label="Devis gratuit" />
          <Button label="Réalisations" />
          <p>Paris - Île de France - Oise</p>
        </div>
      </div>
      <div className="col-span-6 pt-[130px] absolute right-0">
        <img
          src="assets/HeadView.jpg"
          alt="Cordiste"
          className="rounded-l-2xl"
        />
      </div>
    </section>
  );
};
