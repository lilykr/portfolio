'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { TopbarItem } from './molecules/TopbarItem';

export const Header = () => {
  const t = useTranslations();
  const params = usePathname();
  return (
    <div className="fixed w-[98%] p-[15px] laptop:p-[36px] flex justify-between text-body11 tablet:text-body13 laptop:text-body18 z-50 bg-gradient-to-t from-black/25 via-black to-[#0A0A0A]">
      <Link href="/">
        <p>Lisa-Lou Kara </p>
      </Link>
      <div className=" w-[202px] hidden laptop:flex flex-row laptop:w-[600px] justify-between">
        <TopbarItem href="/" title={t('topbar.home')} isActive={params.endsWith('/')} />
        <TopbarItem
          href="/projects"
          title={t('topbar.projects')}
          isActive={params.includes('/projects')}
        />

        <Link href="/about">
          <p>{t('topbar.about')}</p>
        </Link>
        <Link href="/skills">
          <p>{t('topbar.skills')}</p>
        </Link>
        <Link href="contacts">
          <p>{t('topbar.contact_me')}</p>
        </Link>
      </div>
    </div>
  );
};
