import { Realisation } from "components/molecules/Realisation";
import { realisations } from "data/realisations";

export const RealisationsList = () => {
  return (
    <section className="pt-[90px] pb-[90px] shadow-2xl xs:px-[12px] sm:px-[12px]">
      <p className="col-span-12 text-left text-[24px] xs:text-[16px] sm:text-[16px] ">
        Découvrez la liste des clients qui nous ont confiés leurs projets
      </p>
      {realisations.map((elm: any, i: number) => {
        return <Realisation data={elm} key={i} />;
      })}
    </section>
  );
};
