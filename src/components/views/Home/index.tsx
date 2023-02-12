import {
  HeadView,
  Presentation,
  Offers,
  Interventions,
  Contact,
} from "./sections";

export const Home = () => {
  return (
    <main className="relative">
      <HeadView />
      <Presentation />
      <Offers />
      <Interventions />
      <Contact />
    </main>
  );
};
