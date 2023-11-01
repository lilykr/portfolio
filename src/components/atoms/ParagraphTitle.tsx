type Props = {
  title: string;
  className?: string;
};
export const ParagraphTitle = ({ title, className }: Props) => {
  return (
    <p
      className={`text-body20 laptop:text-title60 font-bold pb-[60px] laptop:pb-[110px] font-manrope ${className}`}>
      {title}
    </p>
  );
};
