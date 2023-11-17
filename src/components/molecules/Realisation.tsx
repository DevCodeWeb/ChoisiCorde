/* eslint-disable @next/next/no-img-element */
type CardType = {
  data: any;
  key: any;
};

export const Realisation = ({ data, key }: CardType) => {
  return (
    <div
      className="col-span-12 sm:col-span-12 h-[220px] flex md:col-span-12 rounded-2xl overflow-hidden sm:mb-[24px] xs:flex-col-reverse xs:h-full sm:h-full sm:flex-col-reverse"
      key={key}
    >
      <div className="flex flex-col px-[24px] gap-[12px] w-full items-start justify-center h-full text-white bg-primary100 py-[24px]">
        <h5 className="text-left text-[24px] font-semibold">{data.title}</h5>{" "}
        <h5 className="font-normal text-left text-[20px]">
          {data.description}
        </h5>
        <h5 className="font-normal text-left text-[18px] mb-[24px]">
          {data.adress}
        </h5>
      </div>
      <div className="flex flex-wrap w-full">
        <img src={data.imgs[0]} alt="Intervention Image" className="" />
      </div>
      {data.imgs[1] && (
        <div className="flex flex-wrap w-full">
          <img src={data.imgs[1]} alt="Intervention Image" className="" />
        </div>
      )}
    </div>
  );
};
