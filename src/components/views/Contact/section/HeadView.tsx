import { Button } from "components/atoms/Button";
import { TableSlider } from "components/organism/TableSlider";
import { interventions } from "data/interventions";

export const HeadView = () => {
  return (
    <section className="py-[150px]">
      <h1 className="col-span-12 text-center text-[40px] font-bold">
        Nous contacter
      </h1>
      <p className="col-span-12 text-center text-[24px]">
        Confiez nous l’étude, la coordination et la réalisation de vos projets
      </p>
    </section>
  );
};
