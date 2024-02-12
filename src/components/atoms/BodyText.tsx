type Props = { text: string };

export const BodyText = ({ text }: Props) => {
  return <p className="text-body13 tablet:text-body16 laptop:text-body20">{text}</p>;
};
