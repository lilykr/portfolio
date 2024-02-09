type Props = { text: string };

export const BodyText = ({ text }: Props) => {
  return (
    <p className="text-body11 tablet:text-body13 tablet:text-body16 tablet:text-body20">{text}</p>
  );
};
