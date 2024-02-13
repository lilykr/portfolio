type Props = { text: string };

export const BodyText = ({ text }: Props) => {
  return <p className="tablet:text-body24">{text}</p>;
};
