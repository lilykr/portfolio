import Link from 'next-intl/link';

import { BodyText } from '../atoms/BodyText';

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
          className="flex tablet:flex-row flex-col-reverse justify-end items-end font-manrope py-[10px] hover:text-[#CACACA] hover:cursor-pointer">
          <BodyText className="text-end tablet:text-start" text={details}></BodyText>
          <p className="tablet:pl-[20px] pl-[16px] tablet:text-[60px] text-[26px] leading-none font-bold">
            {title}
          </p>
        </Link>
      ) : (
        <div className="flex tablet:flex-row flex-col-reverse justify-end items-end font-manrope py-[10px]">
          <BodyText className="text-end tablet:text-start" text={details}></BodyText>
          <p className="tablet:pl-[20px] pl-[16px] tablet:text-[60px] text-[26px] leading-none font-bold">
            {title}
          </p>
        </div>
      )}
    </>
  );
};
