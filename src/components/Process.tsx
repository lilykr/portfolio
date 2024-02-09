import { useTranslations } from 'next-intl';

import { BodyText } from './atoms/BodyText';
import { ParagraphTitle } from './atoms/ParagraphTitle';

export const Process = () => {
  const t = useTranslations();
  return (
    <div
      className="flex flex-col items-center tablet:items-start p-[48px] tablet:p-[151px] tablet:flex-row"
      id="process-section">
      <div className="flex flex-col items-center w-full">
        <ParagraphTitle title={t('process')} className="tablet:pb-[53px]" />
        <div className="text-center tablet:text-left tablet:w-full tablet:mr-[60px] pb-[100px]">
          <div className="w-[290px] tablet:w-[530px]">
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
        <div className=" text-center tablet:text-right tablet:flex tablet:justify-end tablet:w-full tablet:mr-[60px]">
          <div className=" w-[290px] tablet:w-[530px]">
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
      </div>
      {/* <div className="w-[190px] h-[160px] mt-[82px] tablet:mt-[0px] tablet:w-[588px] tablet:h-[571px]">
        <Image alt="picture of me" src={me} />
      </div> */}
    </div>
  );
};
