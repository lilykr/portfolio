import { useTranslations } from 'next-intl';

import { ParagraphTitle } from './atoms/ParagraphTitle';
import { ProjectItem } from './molecules/ProjectItem';

export const Projects = () => {
  const t = useTranslations();
  return (
    <div className="fixed tablet:pt-[78px] w-full">
      <ParagraphTitle
        title={t('projects')}
        className="absolute tablet:block tablet:pl-[20px] p-2 ml-16 text-left tablet:bg-none bg-black tablet:bg-opacity-0 bg-opacity-80 w-fit z-30"
      />
      <div className="fixed top-0 right-[25px] overflow-scroll h-[calc(100dvh)] pb-[30px] no-scrollbar tablet:pt-24 pt-16">
        <div className="flex flex-row items-center justify-end tablet:pb-[60px] pb-10">
          <p className="tablet:text-[32px] text-[24px] font-light font-manrope">web</p>
        </div>
        <ProjectItem
          details="2023/ Freelance/ NextJs & Firebase"
          title="eCodevbox"
          link="https://ecodevbox.fr/"
        />

        <ProjectItem
          details="2022-23/ Freelance/ NextJs & Back4App"
          title="WeWatches"
          link="https://wewatches.com/feed"
        />

        <ProjectItem
          details="2022/ Appstud/ NextJs & NodeJs"
          title="Paratennis"
          link="https://paratennis.fft.fr"
        />

        <ProjectItem
          details="2021/ Perso/ React & NodeJs"
          title="Doogood"
          link="https://doo-good.fr/"
        />
        <ProjectItem details="2021/ Freelance/ Gatsby" title="Fiducia" />

        <p className="tablet:text-[32px] text-[24px] font-light font-manrope text-right tablet:pb-[60px] pb-10 pt-[60px]">
          mobile
        </p>
        <ProjectItem details="2022-23/ Projet perso/ React Native & Firebase" title="Bobo" />
        <ProjectItem details="2021/ La Forge/ Front React Native" title="Low Impact" />
      </div>
    </div>
  );
};
