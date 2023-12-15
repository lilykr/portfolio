import { useTranslations } from 'next-intl';

import { ParagraphTitle } from './atoms/ParagraphTitle';
import { ProjectItem } from './molecules/ProjectItem';

export const Projects = () => {
  const t = useTranslations();
  return (
    <div className="pt-[78px] w-full ">
      <ParagraphTitle title={t('projects')} />
      <div className="absolute top-0 right-[25px] overflow-scroll h-[calc(100vh-2rem)] pb-[30px] no-scrollbar pt-24">
        <div className="flex flex-col laptop:flex-row items-center laptop:justify-end pb-[60px]">
          <p className="text-[32px] font-light font-manrope">web</p>
        </div>
        <ProjectItem details="2023/ Freelance/ NextJs & Firebase" title="eCodevbox" />
        <ProjectItem details="2022-23/ Freelance/ NextJs & Back4App" title="WeWatches" />
        <ProjectItem details="2022/ Appstud/ NextJs & NodeJs" title="Paratennis" />
        <ProjectItem details="2021/ Perso/ React & NodeJs" title="Doogood" />

        <p className="text-[32px] font-light font-manrope text-right pb-[60px] pt-[60px]">mobile</p>
        <ProjectItem details="2022-23/ Projet perso/ React Native & Firebase" title="Bobo" />
      </div>
    </div>
  );
};
