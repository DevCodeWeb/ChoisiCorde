type InputsType = {
  placeholder: string;
};

export const Input = ({ placeholder }: InputsType) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className="bg-white rounded-[8px] pl-[12px] w-[300px] h-[40px] text-black"
    />
  );
};

export const TextArea = ({ placeholder }: InputsType) => {
  return (
    <textarea
      placeholder={placeholder}
      className="bg-white rounded-[8px] pl-[12px] pt-[8px] w-full h-[100px] text-black"
    />
  );
};
