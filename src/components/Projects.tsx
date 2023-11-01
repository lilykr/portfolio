import { useTranslations } from 'next-intl';

import desktop from '../../assets/images/desktop.svg';
import mobile from '../../assets/images/mobile.svg';

import { ParagraphTitle } from './atoms/ParagraphTitle';
import { ImageButton } from './molecules/ImageButton';

export const Projects = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center pt-[78px]" id="projects-section">
      <ParagraphTitle title={t('projects')} />
      <div className="flex flex-col laptop:flex-row items-center laptop:justify-center">
        <ImageButton alt="mobile" href="/projets-mobile" src={mobile} />
        <ImageButton alt="desktop" href="/projets-web" src={desktop} />
      </div>
    </div>
  );
};
