import { useEffect, useState } from "react";
import { Button } from "../atoms/Button";
import { Couverture, MobileMenu, Nuisibles } from "../shared/Drop";

import { Icon } from "@iconify/react";
import menuFill from "@iconify/icons-eva/menu-fill";

import { scrollTo } from "helper/ScrollTo";
import Link from "next/link";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  const navigationElements = [
    {
      title: "Accueil",
    },
    {
      title: "Réalisations",
    },
    {
      title: "Couverture",
    },
  ];

  return (
    <div
      className={`fixed top-0 z-50 w-screen  duration-300 ${
        scroll ? "bg-primary300 shadow-lg" : "bg-transparent"
      }`}
    >
      <header className="h-[75px] flex justify-between max-w-[1280px] relative">
        <div className="flex items-center">
          <Link href="/">
            <div className="w-[50px] cursor-pointer flex items-center gap-[12px]">
              <img
                src="assets/logoCC.png"
                alt=""
                className="w-full aspect-auto"
              />
              <h1>ChoisiCorde</h1>
            </div>
          </Link>
          <h2
            className=" lg:hidden xl:hidden xxl:hidden"
            onClick={() => {
              setVisible(true);
            }}
          >
            <Icon icon={menuFill} className="w-[32px] h-[32px]" />
          </h2>
        </div>
        {visible && <MobileMenu setVisible={setVisible} />}
        <div className="flex items-center gap-[24px]">
          {navigationElements.map((navigationElement: any, i: any) => {
            return (
              <div key={i} className="relative sm:hidden md:hidden">
                <ul
                  className="duration-150 cursor-pointer hover:text-primary100"
                  onClick={() => {
                    scrollTo(1700);
                  }}
                >
                  {navigationElement.title}
                </ul>
                {navigationElement.drop && <navigationElement.drop />}
              </div>
            );
          })}
          <Link href="contact">
            <Button label="Demander un devis" />
          </Link>
        </div>
      </header>
    </div>
  );
};
