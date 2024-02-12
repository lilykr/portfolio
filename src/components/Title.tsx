import { useTranslations } from 'next-intl';

import { BodyText } from './atoms/BodyText';

export const Title = () => {
  const t = useTranslations();
  return (
    <div className="absolute bottom-0 flex w-full tablet:flex-row flex-col p-[15px]">
      <div className="font-manrope text-h3 tablet:text-h2 desktop:text-h1 flex flex-col justify-end">
        <p className="leading-[0.5]">Web </p>
        <p className="leading-snug">Developer</p>
      </div>
      <div className="flex flex-col justify-end pb-[40px] tablet:pl-[15px] text-body11 tablet:text-body13 laptop:text-body16 desktop:text-body20">
        <BodyText text={t('specialised_in')} />
        <BodyText text={t('and_in')} />
      </div>
    </div>
  );
};
