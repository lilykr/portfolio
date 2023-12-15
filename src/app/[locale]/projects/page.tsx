'use client';

import { useTranslations } from 'next-intl';

import { Projects } from '@/components/Projects';

export default function Web() {
  const t = useTranslations();
  return (
    <div className="pt-[50px] flex flex-col items-center ">
      <Projects />
    </div>
  );
}
