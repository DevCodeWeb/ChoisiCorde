import { Button } from "components/atoms/Button";
import { scrollTo } from "helper/ScrollTo";

export const Footer = () => {
  return (
    <div className="w-screen bg-black ">
      <footer className="py-[32px] flex flex-col gap-[64px]">
        <div className="flex gap-[64px] sm:flex-col md:flex-col">
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-blod text-[32px] mb-[12px]">Nos coordonnées</h3>
            <h4 className="text-[16px] font-light">
              Téléphone : &nbsp;
              <a href="tel:0751669701">
                <span className="duration-150 cursor-pointer hover:underline hover:text-primary100">
                  07 51 66 97 01
                </span>
              </a>
            </h4>
            <h4 className="text-[16px] font-light ">
              Mail : &nbsp;
              <a href="mailto:choisicorde@gmail.com">
                <span className="duration-150 cursor-pointer hover:underline hover:text-primary100">
                  choisicorde@gmail.com
                </span>
              </a>
            </h4>
            <h4 className="text-[16px] font-light ">
              Zone d’intervention : Paris - Île de France
            </h4>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-blod text-[32px] mb-[12px]">Nos services</h3>
            <h4
              className="text-[16px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer"
              onClick={() => {
                scrollTo(1700);
              }}
            >
              Couvrture
            </h4>
            <h4
              className="text-[16px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer"
              onClick={() => {
                scrollTo(1700);
              }}
            >
              Recherche des fuites en toiture
            </h4>
            <h4
              className="text-[16px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer"
              onClick={() => {
                scrollTo(1700);
              }}
            >
              Installateur Conseil Velux
            </h4>
          </div>
          <div className="flex flex-col gap-[12px] justify-end">
            <h4
              className="text-[16px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer"
              onClick={() => {
                scrollTo(1700);
              }}
            >
              Controle EPI
            </h4>
            <h4
              className="text-[16px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer"
              onClick={() => {
                scrollTo(1700);
              }}
            >
              Intervention guêpes/frelons
            </h4>
            <h4
              className="text-[16px] font-light hover:underline hover:text-primary100 duration-150 cursor-pointer"
              onClick={() => {
                scrollTo(1700);
              }}
            >
              3D Dératisation
            </h4>
          </div>
        </div>
        <div className="flex justify-between sm:flex-col-reverse md:flex-col-reverse sm:gap-[12px] md:gap-[12px]">
          <div className="flex items-center">
            <h5 className="text-[12px]">
              © Copyright 2022 - site développé par{" "}
              <b className="duration-150 cursor-pointer hover:underline hover:text-primary100">
                DevCode
              </b>
            </h5>
          </div>
          <div className="flex items-center gap-[12px] sm:flex-col md:flex-col">
            <h5>Téléphone : 07 51 66 97 01</h5>
            <a href="tel:0751669701">
              <Button label="Appeler" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
