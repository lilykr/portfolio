type Props = { text: string };

export const BodyText = ({ text }: Props) => {
  return (
    <p className="text-body11 tablet:text-body13 laptop:text-body16 laptop:text-body20">{text}</p>
  );
};
