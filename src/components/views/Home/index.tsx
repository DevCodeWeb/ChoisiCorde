import {
  HeadView,
  Presentation,
  Interventions,
  Contact,
  Nuisibles,
} from "./sections";

export const Home = () => {
  return (
    <main>
      <HeadView />
      <Presentation />
      <Interventions />
      <Contact />
      <Nuisibles />
    </main>
  );
};
