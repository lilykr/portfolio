type Props = {
  details: string;
  title: string;
};

export const ProjectItem = ({ details, title }: Props) => {
  return (
    <div className="flex flex-row justify-end items-end font-manrope py-[10px]">
      <p className="">{details}</p>
      <p className="pl-[20px] text-[60px] leading-none font-light">{title}</p>
    </div>
  );
};
