import { useState } from "react";
import { Button } from "../atoms/Button";
import { Couverture, MobileMenu, Nuisibles } from "../shared/Drop";

export const Header = () => {
  const [visible, setVisible] = useState(false);

  const navigationElements = [
    {
      title: "Controle EPI",
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
      <header className="h-[75px] flex justify-between px-[32px] relative">
        <div className="flex items-center">
          <h2 className="sm:hidden md:hidden">Choisi Corde</h2>
          <h2
            className=" lg:hidden xl:hidden"
            onClick={() => {
              setVisible(true);
            }}
          >
            Menu
          </h2>
        </div>
        {visible && <MobileMenu setVisible={setVisible} />}
        <div className="flex items-center gap-[24px]">
          {navigationElements.map((navigationElement: any, i: any) => {
            return (
              <div key={i} className="relative sm:hidden md:hidden">
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
