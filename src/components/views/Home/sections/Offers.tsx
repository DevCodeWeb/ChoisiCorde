import { interventions } from "data/interventions";
import { TableSlider } from "components/organism/TableSlider";

/* eslint-disable @next/next/no-img-element */
export const Offers = () => {
  return (
    <section className="py-[200px] xs:px-[12px] text-white">
      <h1 className="col-span-12 text-center text-[40px] font-bold xs:text-[32px] sm:text-[32px]">
        Nos services
      </h1>
      <p className="col-span-12 text-center text-[20px] mb-[24px]">
        Confiez nous l’étude, la coordination et la réalisation de vos projets
      </p>
      <TableSlider data={interventions} />
    </section>
  );
};
