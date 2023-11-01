type Props = {
  value?: string;
  onChange: (text: string) => void;
  placeholder: string;
  className?: string;
};

export const Input = ({ onChange, value, placeholder, className }: Props) => {
  return (
    <div className={className}>
      <input
        placeholder={placeholder}
        className="border-b text-white bg-black outline-none pb-[20px] placeholder:text-white"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
};
