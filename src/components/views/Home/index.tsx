import { HeadView, Presentation, Interventions } from "./sections";

import { Contact } from "./sections/Contact";

export const Home = () => {
  return (
    <main className="relative">
      <HeadView />
      <Presentation />
      <Interventions />
      <Contact />
    </main>
  );
};
