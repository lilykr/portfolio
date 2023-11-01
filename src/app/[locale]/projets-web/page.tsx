'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ProjectTitle } from '@/components/atoms/ProjectTitle';

import arrow from '../../../../assets/images/arrow.svg';
import paratennis from '../../../../assets/images/paratennis.svg';

export default function Web() {
  const t = useTranslations();
  return (
    <div className="pt-[50px] flex flex-col items-center mx-[20px] pb-[50px]">
      <ProjectTitle alt="arrow" src={arrow} title={t('web')} />

      <div className="group transform transition-transform hover:scale-105">
        <Link href="/projets-web/paratennis">
          <Image
            src={paratennis}
            alt="paratennis website screenshot"
            className="rounded-xl hover:opacity-30"
          />
          {/* <div className="hidden group-hover:block text-body20 bg-black p-[30px] rounded-xl"> */}
          <div className="hidden group-hover:block text-body20 font-bold absolute top-[50%] m-[50px] ">
            <p>NextJs - graphQL - Syled components - Redux</p>
            <p>Developpement front - Communication client - gestion d équipe</p>
          </div>
          {/* </div> */}
        </Link>
      </div>
    </div>
  );
}
