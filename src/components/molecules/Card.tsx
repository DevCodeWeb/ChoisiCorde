/* eslint-disable @next/next/no-img-element */
type CardType = {
  img: string;
  title: string;
  key: any;
};

export const Card = ({ img, title, key }: CardType) => {
  return (
    <div
      className="col-span-4 sm:col-span-12 md:col-span-12 h-[280px] rounded-2xl overflow-hidden mb-[50px] sm:mb-[24px]"
      key={key}
    >
      <img src={img} alt={title} className="w-full aspect-auto" />
      <div className="flex w-full items-center justify-center text-white bg-primary100 py-[24px]">
        <h5 className="font-bold text-[24px]">{title}</h5>
      </div>
    </div>
  );
};
