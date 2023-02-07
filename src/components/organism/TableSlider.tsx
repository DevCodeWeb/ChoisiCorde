import { useState } from "react";

import { Icon } from "@iconify/react";

type TYPETABLE = {
  data: any;
};

export const TableSlider = ({ data }: TYPETABLE) => {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="col-span-12 text-black rounded-2xl">
      <div className="flex items-center justify-center gap-[24px] text-white mb-[24px]">
        {data.map((elm: any, i: number) => {
          return (
            <ul
              key={i}
              className={` ${
                page === i
                  ? "bg-prettyBlue ring-4 ring-white bg-opacity-25"
                  : "hover:ring-2 hover:ring-white"
              } cursor-pointer flex items-center gap-[12px] text-[22px] rounded-2xl font-semibold px-[18px] bg-primary100 py-[8px] duration-200`}
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
      <div className="flex justify-between w-full overflow-hidden bg-white rounded-2xl">
        <div className="mt-[32px] h-[420px] px-[32px] w-full">
          <h3 className="font-bold text-[24px] mb-[24px]">
            {data[page].title}
          </h3>
          <p>{data[page].description}</p>
        </div>
        <div className="flex items-center justify-center w-full ">
          {data[page].img && (
            <img
              src={data[page].img}
              alt={data[page].title + "image"}
              className="w-full aspect-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};
