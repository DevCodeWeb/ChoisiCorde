/* eslint-disable @next/next/no-img-element */
type CardType = {
  img: string;
  title: string;
  key: any;
};

export const Card = ({ img, title, key }: CardType) => {
  return (
    <div
      className="col-span-4 xs:col-span-12 sm:col-span-12 md:col-span-12 rounded-2xl overflow-hidden sm:mb-[24px]"
      key={key}
    >
      <img src={img} alt={title} className="w-full aspect-auto h-[280px]" />
      <div className="flex w-full items-center justify-center h-full text-white bg-primary100 py-[24px]">
        <h5 className="font-normal text-center text-[18px] px-[12px] h-full">
          {title}
        </h5>
      </div>
    </div>
  );
};
