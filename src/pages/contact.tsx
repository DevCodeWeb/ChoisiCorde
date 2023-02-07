import { Contact } from "components/views/Contact";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://mentorgoal.com/" />
        <link rel="icon" href="/favicon.ico" />
        <title>Contact</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Trop haut pour toi ? Ne prends pas de risques, Choisi Corde est là
          pour tous tes travaux d’accès difficile"
        />
        <meta
          name="keywords"
          content="Corde, Intervention, Paris, Cordiste, Toiture, Zinc, Ardoise, Accès difficile, Couverture, Couvreur"
        />
        <meta name="author" content="Choisi Corde" />
      </Head>
      <Contact />
    </>
  );
}
