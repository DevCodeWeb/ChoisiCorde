import { HeadView, Presentation, Interventions, Nuisibles } from "./sections";

import { Contact } from "./sections/Contact";

export const Home = () => {
  return (
    <main>
      <HeadView />
      <Presentation />
      <Interventions />
      <Nuisibles />
      <Contact />
    </main>
  );
};
