import { useState } from "react";
import { Button } from "../atoms/Button";
import { Couverture, Nuisibles } from "../shared/Drop";

export const Header = () => {
  const navigationElements = [
    {
      title: "Controle EPI",
      drop: Couverture,
    },
    {
      title: "Nuisibles",
    },
    {
      title: "Couverture",
    },
  ];

  return (
    <div className="fixed top-0 z-50 w-screen bg-primary300">
      <header className="h-[75px] flex justify-between px-[32px]">
        <div className="flex items-center">Choisi Corde</div>
        <div className="flex items-center gap-[24px]">
          {navigationElements.map((navigationElement: any, i: any) => {
            return (
              <div key={i} className="relative">
                <ul className="duration-150 cursor-pointer hover:underline">
                  {navigationElement.title}
                </ul>
                {navigationElement.drop && <navigationElement.drop />}
              </div>
            );
          })}
          <Button label="Demander un devis" />
        </div>
      </header>
    </div>
  );
};
