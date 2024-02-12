type Props = {
  title: string;
  className?: string;
};
export const ParagraphTitle = ({ title, className }: Props) => {
  return (
    <p className={`text-body24 tablet:text-title60 font-bold font-manrope ${className}`}>{title}</p>
  );
};
