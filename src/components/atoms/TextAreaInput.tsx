type Props = {
  value?: string;
  onChange: (text: string) => void;
  placeholder: string;
  className?: string;
};

export const TextAreaInput = ({ onChange, value, placeholder, className }: Props) => {
  return (
    <div className={className}>
      <textarea
        placeholder={placeholder}
        className="w-full border-b text-white bg-black outline-none resize-none placeholder:text-white"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
};
