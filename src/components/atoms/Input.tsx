type Props = {
  value?: string;
  onChange: (text: string) => void;
  placeholder: string;
  className?: string;
  error?: boolean;
};

export const Input = ({ onChange, value, placeholder, className, error }: Props) => {
  return (
    <div className={className}>
      <input
        placeholder={placeholder}
        className={`${
          error ? 'border-b border-[#9C3C39]' : 'border-b'
        } text-white bg-black bg-opacity-0 outline-none pb-[20px] placeholder:text-white`}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
};
