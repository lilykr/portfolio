'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { BodyText } from '@/components/atoms/BodyText';
import { ParagraphTitle } from '@/components/atoms/ParagraphTitle';

import me from '../../../../assets/images/me.png';

export default function About() {
  const t = useTranslations();
  return (
    <div
      className="relative z-10 flex flex-col items-center laptop:items-start laptop:pt-[120px] pt-[200px] laptop:px-[90px] laptop:flex-row"
      id="about-section">
      <div className="flex flex-col items-center laptop:items-start">
        <ParagraphTitle title={t('about_me')} />
        <div className="text-center laptop:text-left w-[290px] laptop:w-[530px] laptop:mr-[60px]">
          <BodyText
            text="Im a paragraph. Click here to add your own text and edit me. Its easy. Just click Edit
          Text or double click me to add your own content and make changes to the font. Feel free to
          drag and drop me anywhere you like on your page. Im a great place for you to tell a story
          and let your users know a little more about you. This is a areat space to write long text
          about your company and vour services. You can use this space to go into a little more
          detail about your company."
          />
        </div>
      </div>
      <div className="w-[190px] h-[160px] mt-[82px] laptop:mt-[0px] laptop:w-[588px] laptop:h-[571px]">
        <Image alt="picture of me" src={me} />
      </div>
    </div>
  );
}
