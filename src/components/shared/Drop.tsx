import { Button, LinkBtn } from "components/atoms/Button";
import { scrollTo } from "helper/ScrollTo";
import Link from "next/link";
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
    <div className="absolute left-0 z-50 w-screen h-screen overflow-scroll bg-primary300 bg-opacity-40">
      <div className="bg-white px-[18px] py-[18px]  h-screen flex flex-col justify-between w-[70vw]">
        <div className="text-primary300">
          <h2 className="text-[24px] font-bold mb-[24px]">Choisi Corde</h2>
          <h2 className="text-[20px] mb-[12px]">Présentation</h2>
          <Link href="/">
            <LinkBtn
              onClick={() => {
                setVisible(false);
              }}
              label="  Qui sommes-nous ?"
            />
          </Link>
          <h2 className="text-[20px] mb-[12px]">Interventions</h2>
          <ul>
            {interventions.map((intervention, i) => {
              return (
                <Link href="/realisations" key={i}>
                  <LinkBtn
                    onClick={() => {
                      scrollTo(700);
                      setVisible(false);
                    }}
                    label={intervention.title}
                  />
                </Link>
              );
            })}
          </ul>
          <h2 className="text-[20px] mb-[12px]">Nuisibles</h2>
          <Link href="/">
            <LinkBtn
              onClick={() => {
                setVisible(false);
              }}
              label="Désinfection"
            />
          </Link>
          <Link href="/">
            <LinkBtn
              onClick={() => {
                setVisible(false);
              }}
              label="Désinsectisation"
            />
          </Link>
          <Link href="/">
            <LinkBtn
              onClick={() => {
                setVisible(false);
              }}
              label="Dératisation"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-[8px]">
          <Link href="/contact">
            <Button
              label="Demander un devis"
              onClick={() => {
                setVisible(false);
              }}
            />
          </Link>
          <Link href="/contact">
            <Button
              label="Contacter"
              onClick={() => {
                setVisible(false);
              }}
            />
          </Link>
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
