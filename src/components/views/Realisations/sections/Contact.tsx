import { Button } from "components/atoms/Button";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="py-[32px] shadow-2xl bg-primary100 xs:px-[12px] sm:px-[12px]">
      <p className="col-span-12 text-center text-[24px]">
        Vous souhaitez en faire partie ?
      </p>
      <p className="col-span-12 text-center text-[16px]">
        Choisisez le moyen de contact qui vous convient le plus
      </p>
      <div className="flex col-span-12 items-center gap-[12px] xs:flex-col sm:flex-col">
        <a href="tel:0751669701">
          <Button label="Appeler" />
        </a>
        <Link href="/contact">
          <Button label="Demander un devis" />
        </Link>
        <Link href="/">
          <Button label="Écrire un message" />
        </Link>
        <a href="mailto:choisicorde@gmail.com">
          <Button label="Envoyer un mail" />
        </a>
      </div>
    </section>
  );
};
