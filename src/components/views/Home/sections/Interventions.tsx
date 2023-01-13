import { Button } from "components/atoms/Button";

/* eslint-disable @next/next/no-img-element */
export const Interventions = () => {
  const Interventions = [
    {
      title: "Couverture",
      description:
        "La couverture de toit est essentielle pour assurer l’étanchéité et l’esthétisme d’un bâtiment à Paris. ",
      imagePath: "assets/couverture.jpg",
    },
    {
      title: "Installateur conseil Velux",
      description:
        "Installation de tous types de produits Velux, volets, stores, verrières, etc. de la marque Velux.",
      imagePath: "assets/velux.jpg",
    },
    {
      title: "Controle EPI",
      description:
        "Cette précaution permet de s'assurer de la fiabilité de l'équipement et de son bon état pour assurer le meilleur de la protection aux employé et collaborateurs de votre chantier.",
      imagePath: "assets/controle.jpg",
    },
    {
      title: "Guêpes/frelons",
      description:
        "Destruction de nids d’hyménoptères, tels que guêpes, bourdons et frelons asiatiques.",
      imagePath: "assets/guepes.jpg",
    },
  ];
  return (
    <section className="pt-[100px]">
      <h1 className="col-span-12 text-[32px] font-semibold text-center mb-[32px]">
        Nous intervenons
      </h1>
      {Interventions.map((intervention, i) => {
        return (
          <div className="flex gap-[48px] items-center col-span-12" key={i}>
            <div className="">
              <h4 className="text-[32px]">{intervention.title}</h4>
              <p>{intervention.description}</p>
            </div>
            <img
              src={intervention.imagePath}
              alt={intervention.title}
              className="rounded-2xl"
            />
          </div>
        );
      })}
      <div className="col-span-12 text-center my-[128px]">
        <h3 className="text-[32px] font-bold mb-[24px]">
          Confiez nous l’étude, la coordination et la réalisation de vos projets
        </h3>
        <Button label="Demandez votre devis" />
      </div>
    </section>
  );
};
