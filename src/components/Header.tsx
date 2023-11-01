'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Header = () => {
  const t = useTranslations();
  return (
    <div className="fixed z-50 bg-black w-full p-[15px] laptop:p-[36px] flex justify-between text-body11 tablet:text-body13 laptop:text-body18">
      <Link href="/">
        <p>Lisa-Lou Kara</p>
      </Link>
      <div className=" w-[202px] hidden laptop:flex flex-row laptop:w-[400px] justify-between">
        <Link href="#about-section">
          <p>{t('topbar.about')}</p>
        </Link>
        <Link href="#projects-section">
          <p>{t('topbar.projects')}</p>
        </Link>
        <Link href="#process-section">
          <p>{t('topbar.my_process')}</p>
        </Link>
        <Link href="#contact-section">
          <p>{t('topbar.contact_me')}</p>
        </Link>
      </div>
    </div>
  );
};
