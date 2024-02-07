type Props = {
  title: string;
  className?: string;
};
export const ParagraphTitle = ({ title, className }: Props) => {
  return (
    <p className={`text-body20 tablet:text-title60 font-bold font-manrope ${className}`}>{title}</p>
  );
};
