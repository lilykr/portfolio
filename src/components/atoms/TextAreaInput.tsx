type Props = {
  value?: string;
  onChange: (text: string) => void;
  placeholder: string;
  className?: string;
  error?: boolean;
};

export const TextAreaInput = ({ onChange, value, placeholder, className, error }: Props) => {
  return (
    <div className={className}>
      <textarea
        placeholder={placeholder}
        className={`w-full ${
          error ? 'border-b border-[#9C3C39]' : 'border-b'
        } text-white bg-black outline-none resize-none placeholder:text-white`}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
};
