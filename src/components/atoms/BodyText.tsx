type Props = { text: string; className?: string };

export const BodyText = ({ text, className }: Props) => {
  return <p className={`laptop:text-body20 ${className}`}>{text}</p>;
};
