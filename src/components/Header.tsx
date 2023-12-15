'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { TopbarItem } from './molecules/TopbarItem';

export const Header = () => {
  const t = useTranslations();
  const params = usePathname();
  return (
    <div className="fixed w-[98%] p-[15px] laptop:p-[36px] flex flex-col laptop:flex-row justify-between text-body13 laptop:text-body18 z-50 laptop:bg-gradient-to-t laptop:from-black/25 laptop:via-black laptop:to-[#0D0D0D]">
      <Link href="/">
        <p className="pb-5 laptop:pb-0">Lisa-Lou Kara </p>
      </Link>
      <div className=" w-[202px] laptop:flex flex-row laptop:w-[600px] justify-between">
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
