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
          className="flex tablet:flex-row flex-col-reverse justify-end items-end font-manrope py-[10px] hover:text-[#CACACA] hover:cursor-pointer">
          <p className="tablet:text-body18 text-body11 text-end tablet:text-start">{details}</p>
          <p className="tablet:pl-[20px] pl-[16px] tablet:text-[60px] text-[26px] leading-none font-light">
            {title}
          </p>
        </Link>
      ) : (
        <div className="flex tablet:flex-row flex-col-reverse justify-end items-end font-manrope py-[10px]">
          <p className="tablet:text-body18 text-body11 text-end tablet:text-start">{details}</p>
          <p className="tablet:pl-[20px] pl-[16px] tablet:text-[60px] text-[26px] leading-none font-light">
            {title}
          </p>
        </div>
      )}
    </>
  );
};
