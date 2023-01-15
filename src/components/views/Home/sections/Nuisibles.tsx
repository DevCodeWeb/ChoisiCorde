import { Card } from "components/molecules/Card";

export const Nuisibles = () => {
  const nuisibles = [
    {
      imagePath: "assets/desinfection.jpg",
      title: "Désinfection",
    },
    {
      imagePath: "assets/desinsectisation.jpg",
      title: "Désinsectisation",
    },
    {
      imagePath: "assets/deratisation.jpg",
      title: "Dératisation",
    },
  ];
  return (
    <section className="mb-[100px]">
      <h3 className="text-[32px] font-bold col-span-12 text-center my-[64px] sm:my-[24px]">
        Nous nous occupons aussi des nuisibles
      </h3>
      {nuisibles.map((nuisible, i) => {
        return <Card img={nuisible.imagePath} title={nuisible.title} key={i} />;
      })}
    </section>
  );
};
