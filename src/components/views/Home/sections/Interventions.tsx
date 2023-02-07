import { Button } from "components/atoms/Button";

import { Icon } from "@iconify/react";
import arrowRightOutline from "@iconify/icons-eva/arrow-right-outline";
import arrowRightFill from "@iconify/icons-eva/arrow-right-fill";
import Link from "next/link";
import { interventions } from "data/interventions";
import { TableSlider } from "components/organism/TableSlider";

/* eslint-disable @next/next/no-img-element */
export const Interventions = () => {
  return (
    <section className="py-[200px]">
      <h1 className="col-span-12 text-center text-[40px] font-bold">
        Nous intervenons
      </h1>
      <p className="col-span-12 text-center text-[20px] mb-[24px]">
        Confiez nous l’étude, la coordination et la réalisation de vos projets
      </p>
      <TableSlider data={interventions} />
    </section>
  );
};
