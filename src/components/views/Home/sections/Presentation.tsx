import { Button } from "components/atoms/Button";
import { scrollTo } from "helper/ScrollTo";

/* eslint-disable @next/next/no-img-element */
export const Presentation = () => {
  return (
    <div className="w-screen bg-primary100 ">
      <section className="bg-primary100 sm:mt-[50px]">
        <div className="bg-white col-span-12 text-primary300 rounded-2xl mt-[24px] text-center pt-[32px] pb-[12px]">
          <h2 className="text-[38px] sm:text-[28px] font-semibold">
            Expert de vos travaux en hauteur et d’accès difficiles
          </h2>
          <h3 className="text-[24px] font-bold mb-[48px] sm:text-[24px]">
            Confiez nous l’étude, la coordination et la réalisation de vos
            projets
          </h3>
        </div>
        <div className="col-span-10 col-start-2 text-center sm:pt-0 sm:b-[24px] text-[24px] sm:text-[16px]">
          <br />
          <p>
            Notre société <b>ChoisiCorde</b>, située en Île-de-France,
            intervient dans toute la région parisienne pour tout type de
            rénovation en hauteur.
          </p>
          <br />
          <p>
            Nous sommes spécialisés dans les travaux de bâtiment sur corde et
            accès difficile. Nous intervenons auprès des particuliers et des
            professionnels sur toute la région.
          </p>
          <br />
          <p>
            Soucieux de vous apporter une entière satisfaction, nous faisons
            tout pour réaliser du travail d’excellence à la hauteur de vos
            attentes.
          </p>
        </div>
        <div className="sm:col-span-12 md:col-span-12 col-span-2 col-start-6 text-center mb-[24px] mt-[24px]">
          <div className="absolute">
            <Button
              label="Demandez votre devis"
              onClick={() => {
                scrollTo(7000);
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
