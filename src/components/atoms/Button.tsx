type ButtonType = {
  label: string;
  onClick?: any;
};

export const Button = ({ label, onClick }: ButtonType) => {
  return (
    <button
      className="px-[18px] py-[8px] hover:bg-white hover:text-primary300 font-semibold duration-150 bg-primary200 rounded-[4px]"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
