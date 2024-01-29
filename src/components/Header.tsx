'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { TopbarItem } from './molecules/TopbarItem';

export const Header = () => {
  const t = useTranslations();
  const params = usePathname();
  return (
    <div className="fixed w-[50px] flex tablet:w-[calc(100%-22px)] p-[15px] tablet:p-[26px] rotate-90 tablet:rotate-0 text-body13 laptop:text-body18 tablet:bg-black tablet:bg-opacity-80 z-50">
      <Link href="/">
        <p className="hidden tablet:block">Lisa-Lou Kara</p>
        <p className="tablet:hidden w-fit h-fit -rotate-90">LLK</p>
      </Link>
      <div className="absolute top-0 tablet:top-[26px] flex tablet:justify-end tablet:w-[600px] w-max rotate-180 tablet:rotate-0 pb-[16px] tablet:pb-0 pt-[17px] tablet:pt-0 pr-12 tablet:pr-0 bg-black bg-opacity-80 tablet:bg-opacity-0 text-body11 laptop:text-body18 -z-[1] tablet:z-10">
        <TopbarItem href="/" title={t('topbar.home')} isActive={params.endsWith('/')} />
        <TopbarItem
          href="/projects"
          title={t('topbar.projects')}
          isActive={params.includes('/projects')}
        />
        <TopbarItem href="/about" title={t('topbar.about')} isActive={params.includes('/about')} />
        <TopbarItem
          href="/skills"
          title={t('topbar.skills')}
          isActive={params.includes('/skills')}
        />
        <TopbarItem
          href="/contact"
          title={t('topbar.contact_me')}
          isActive={params.includes('/contact')}
        />
      </div>
    </div>
  );
};
