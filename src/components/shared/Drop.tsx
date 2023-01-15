import { Button } from "components/atoms/Button";
import { useState } from "react";

export const Couverture = () => {
  return (
    <div className="bg-white px-[32px] py-[24px] rounded-b-lg fixed top-[75px] text-black">
      <h3 className="text-[24px] mb-[12px] text-primary200 font-bold">
        Nous intervenons
      </h3>
      <h4 className="text-[20px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer">
        Couvrture
      </h4>
      <h4 className="text-[20px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer">
        Recherche des fuites en toiture
      </h4>
      <h4 className="text-[20px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer">
        Installateur Conseil Velux
      </h4>
    </div>
  );
};

export const Nuisibles = () => {
  return <div className="bg-white px-[32px] py-[24px] fixed">nuisibles</div>;
};

const interventions = [
  {
    title: "Couverture",
  },
  {
    title: "Installateur Conseil Velux",
  },
  {
    title: "Controle EPI",
  },
  {
    title: "Guêpes / Frelons",
  },
];

type TypeMobileMenu = {
  setVisible: any;
};

export const MobileMenu = ({ setVisible }: TypeMobileMenu) => {
  return (
    <div className="absolute left-0 z-50 w-screen h-screen bg-primary300 bg-opacity-40">
      <div className="bg-white px-[18px] py-[18px]  h-screen flex flex-col justify-between w-[70vw]">
        <div className="text-primary300">
          <h2 className="text-[24px] font-bold mb-[24px]">Choisi Corde</h2>
          <h2 className="text-[20px] mb-[12px]">Présentation</h2>
          <h3 className="text-[18px] mb-[8px] bg-primary100 rounded-md bg-opacity-5 px-[6px] py-[4px]">
            Qui sommes-nous ?
          </h3>
          <h2 className="text-[20px] mb-[12px]">Interventions</h2>
          <ul>
            {interventions.map((intervention, i) => {
              return (
                <li
                  key={i}
                  className="text-[18px] mb-[8px] bg-primary100 rounded-md bg-opacity-5 px-[6px] py-[4px]"
                >
                  {intervention.title}
                </li>
              );
            })}
          </ul>
          <h2 className="text-[20px] mb-[12px]">Nuisibles</h2>
          <h3 className="text-[18px] mb-[8px] bg-primary100 rounded-md bg-opacity-5 px-[6px] py-[4px]">
            Désinfection
          </h3>
          <h3 className="text-[18px] mb-[8px] bg-primary100 rounded-md bg-opacity-5 px-[6px] py-[4px]">
            Désinsectisation
          </h3>
          <h3 className="text-[18px] mb-[8px] bg-primary100 rounded-md bg-opacity-5 px-[6px] py-[4px]">
            Dératisation
          </h3>
        </div>
        <div className="flex flex-col gap-[8px]">
          <Button label="Demander un devis" />
          <Button label="Contacter" />
          <h2
            className="text-[16px] text-center hover:underline text-primary300"
            onClick={() => {
              setVisible(false);
            }}
          >
            Fermer
          </h2>
        </div>
      </div>
    </div>
  );
};
