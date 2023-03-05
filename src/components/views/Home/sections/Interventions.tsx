import { Icon } from "@iconify/react";
import arrowForwardFill from "@iconify/icons-eva/arrow-forward-fill";
import { Button } from "components/atoms/Button";
import { Card } from "components/molecules/Card";
import Link from "next/link";

export const Interventions = () => {
  const clients = [
    {
      intervention: "Installation de velux sur toiture zinc existente",
      img: "assets/interventions/1_Velux.jpeg",
    },
    {
      intervention: "Nettoyage de verrenda",
      img: "assets/interventions/1_Verenda.jpeg",
    },
    {
      intervention: "Pose de filet anti-pigeons  sur courette interne",
      img: "assets/interventions/1_Filet.jpeg",
    },
  ];

  return (
    <section className="pb-[120px] xs:px-[12px] sm:px-[12px] text-white">
      <h1 className="col-span-12 text-center text-[40px] font-bold  xs:text-[32px] sm:text-[32px]">
        Ils ont fait appel à nous
      </h1>
      <p className="col-span-12 text-center text-[20px] mb-[24px]">
        Voici quelques uns des clients qui ont fait appel à nos services
      </p>
      {clients.map((elm: any, i: number) => {
        return <Card title={elm.intervention} img={elm.img} key={i} />;
      })}
      <div className="col-span-2 col-start-6 xs:col-span-12 sm:col-span-12">
        <Link href="/realisations">
          <Button
            label="Voir plus"
            icon={arrowForwardFill}
            className="flex-row-reverse"
          />
        </Link>
      </div>
    </section>
  );
};
