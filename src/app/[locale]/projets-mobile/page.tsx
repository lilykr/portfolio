'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ProjectTitle } from '@/components/atoms/ProjectTitle';

import arrow from '../../../../assets/images/arrow.svg';

export default function Mobile() {
  const t = useTranslations();
  return (
    <div className="pt-[50px] flex flex-col items-center mx-[20px] pb-[50px]">
      <ProjectTitle alt="arrow" src={arrow} title={t('mobile')} />

      <div className="group transform transition-transform hover:scale-105">
        <Link href="/projets-web/paratennis"></Link>
      </div>
    </div>
  );
}
