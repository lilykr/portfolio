import { useTranslations } from 'next-intl';

import { BodyText } from './atoms/BodyText';

export const Title = () => {
  const t = useTranslations();
  return (
    <div className="pt-[calc(100vh-240px)] tablet:pt-[calc(100vh-380px)] flex flex-col laptop:flex-row items-start laptop:items-end">
      <div className="font-manrope text-h3 tablet:text-h2 desktop:text-h1">
        <p className="leading-[0.5]">Web </p>
        <p className="">Developer</p>
      </div>
      <div className="pb-[40px] laptop:pl-[15px] text-body11 tablet:text-body13 laptop:text-body16 desktop:text-body20 ">
        <BodyText text={t('specialised_in')} />
        <BodyText text={t('and_in')} />
      </div>
    </div>
  );
};
