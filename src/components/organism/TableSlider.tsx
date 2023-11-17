import { useState } from "react";

import { Icon } from "@iconify/react";
import arrowForwardFill from "@iconify/icons-eva/arrow-forward-fill";
import Link from "next/link";

type TYPETABLE = {
  data: any;
};

export const TableSlider = ({ data }: TYPETABLE) => {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="col-span-12 text-black rounded-2xl">
      <div className="flex items-center justify-center xs:flex-wrap gap-[24px] text-white mb-[24px]">
        {data.map((elm: any, i: number) => {
          return (
            <ul
              key={i}
              className={` ${
                page === i
                  ? "bg-prettyBlue ring-4 ring-white bg-opacity-25"
                  : "hover:ring-2 hover:ring-white"
              } cursor-pointer flex h-full items-center w-full justify-center gap-[12px] text-[22px] rounded-2xl font-semibold px-[18px] bg-primary100 py-[8px] duration-200`}
              onClick={() => {
                setPage(i);
              }}
            >
              {elm.link}
              <Icon icon={elm.icon} />
            </ul>
          );
        })}
      </div>
      <div className="flex justify-between w-full overflow-hidden bg-white xs:flex-col-reverse rounded-2xl">
        <div className="mt-[32px] h-[300px] px-[32px] w-full">
          <h3 className="font-bold text-[24px] mb-[24px]">
            {data[page].title}
          </h3>
          <p className="text-[18px]">{data[page].description}</p>
          <Link href="/realisations">
            <div className="flex items-end gap-[8px] hover:gap-[12px] duration-150">
              <h3 className="mt-[24px] font-[500] hover:underline hover:text-primary200 cursor-pointer duration-150">
                En savoir plus
              </h3>
              <Icon icon={arrowForwardFill} className="mb-[4px]" />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full bg-red">
          {data[page].img && (
            <img
              src={data[page].img}
              alt={data[page].title + "image"}
              className="h-full aspect-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};
