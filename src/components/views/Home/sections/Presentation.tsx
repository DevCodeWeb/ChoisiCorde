import { Button } from "components/atoms/Button";
import { scrollTo } from "helper/ScrollTo";

/* eslint-disable @next/next/no-img-element */
export const Presentation = () => {
  return (
    <div className="w-screen bg-primary100 mt-[120px] ">
      <img
        src="assets/presentationFond.jpg"
        alt=""
        className="w-screen aspect-auto brightness-50"
      />
      <section className="bg-primary100 sm:mt-[50px]">
        <div className="col-span-12 text-center sm:pt-0 sm:b-[24px] text-[24px] sm:text-[16px]">
          <div className="col-span-12 text-center pt-[32px] pb-[12px]">
            <h2 className="text-[38px] sm:text-[28px] font-semibold">
              Expert de vos travaux en hauteur et d’accès difficiles
            </h2>
          </div>
          <h3 className="text-[24px] font-bold mb-[48px] sm:text-[24px]">
            Confiez nous l’étude, la coordination et la réalisation de vos
            projets
          </h3>
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
        <div className="col-span-12 text-center mb-[64px] mt-[24px]">
          <Button
            label="Demandez votre devis"
            onClick={() => {
              scrollTo(7000);
            }}
          />
        </div>
      </section>
    </div>
  );
};
