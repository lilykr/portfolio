'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { BodyText } from '@/components/atoms/BodyText';
import { ParagraphTitle } from '@/components/atoms/ParagraphTitle';

import me from '../../../../assets/images/me-new.webp';

export default function About() {
  const t = useTranslations();
  return (
    <div
      className="relative z-10 h-[calc(100dvh-23px)] flex flex-col tablet:flex-row tablet:justify-center tablet:items-center tablet:pt-0 pt-[calc((100dvh)/3-100px)] tablet:px-32"
      id="about-section">
      <div className="flex flex-col items-center tablet:items-start">
        <ParagraphTitle title={t('about_me')} className="max-w-sm" />
        <div className="text-center tablet:text-left w-[270px] mt-4 tablet:w-[530px] tablet:mr-[60px]">
          <BodyText text="“ Développeuse React fullstack freelance avec trois ans d'expérience, je me distingue par une approche agile de la programmation. Mon engagement ? Collaborer étroitement avec mes clients pour créer des produits sur mesure, alliant la puissance du développement à une interface React élégante. Si vous cherchez une professionnelle du code, passionnée et créative, prête à relever de nouveaux défis, explorons ensemble comment je peux contribuer à votre projet. Découvrez mes expériences professionnelles et projets personnels dans ce portfolio. “" />
        </div>
      </div>
      <div className="flex items-center w-[50%] m-auto tablet:mt-[0px] tablet:w-[350px] h-full">
        <Image alt="picture of me" src={me} />
      </div>
    </div>
  );
}
