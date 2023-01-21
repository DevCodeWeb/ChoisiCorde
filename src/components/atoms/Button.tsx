type ButtonType = {
  label: string;
  onClick?: any;
  key?: any;
};

export const Button = ({ label, onClick }: ButtonType) => {
  return (
    <button
      className="px-[18px] w-full sm:w-full md:w-full py-[8px] hover:bg-white hover:text-primary300 font-semibold duration-150 bg-primary200 rounded-[4px]"
      onClick={onClick}
    >
      <h1 className="sm:text-[24px] md:text-[24px]">{label}</h1>
    </button>
  );
};

export const Link = ({ label, onClick, key }: ButtonType) => {
  return (
    <button
      key={key}
      className="mb-[8px] w-full text-left bg-primary100 rounded-md bg-opacity-5 px-[6px] py-[4px]"
      onClick={onClick}
    >
      <h1 className="sm:text-[24px] md:text-[24px]">{label}</h1>
    </button>
  );
};
