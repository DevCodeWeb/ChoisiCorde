type InputsType = {
  placeholder: string;
  name?: string;
  required?: boolean;
  pattern?: string;
};

export const Input = ({ placeholder, name, required, pattern }: InputsType) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      pattern={pattern}
      type="text"
      required={required}
      className="bg-white rounded-[8px] pl-[12px] w-full h-[40px] text-black"
    />
  );
};

export const TextArea = ({ placeholder, name }: InputsType) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="bg-white rounded-[8px] pl-[12px] pt-[8px] w-full h-[100px] text-black"
    />
  );
};
