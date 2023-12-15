import Link from 'next/link';

type Props = {
  details: string;
  title: string;
  link?: string;
};

export const ProjectItem = ({ details, title, link }: Props) => {
  return (
    <>
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="flex flex-row justify-end items-end font-manrope py-[10px] hover:text-[#CACACA]">
          <p className="laptop:text-body18 text-body11 text-end laptop:text-start">{details}</p>
          <p className="laptop:pl-[20px] pl-[16px] laptop:text-[60px] text-[26px] leading-none font-light">
            {title}
          </p>
        </Link>
      ) : (
        <div className="flex flex-row justify-end items-end font-manrope py-[10px]">
          <p className="laptop:text-body18 text-body11 text-end laptop:text-start">{details}</p>
          <p className="laptop:pl-[20px] pl-[16px] laptop:text-[60px] text-[26px] leading-none font-light">
            {title}
          </p>
        </div>
      )}
    </>
  );
};
