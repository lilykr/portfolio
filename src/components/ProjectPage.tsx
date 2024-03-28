/* eslint-disable max-lines-per-function */
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { BodyText } from './atoms/BodyText';
import { Icon, IconName } from './atoms/Icon';
import { ParagraphTitle } from './atoms/ParagraphTitle';

type Props = {
  projectTitle: string;
  websiteLink?: string;
  projectDetails: string;
  highlights: string;
  iconNames: IconName[];
  altImageLaptop?: string;
  imageSrcLaptop?: StaticImageData;
  imageSrcPhone: StaticImageData;
  altImagePhone: string;
  imageSrcPhone2?: StaticImageData;
  altImagePhone2?: string;
};

export const ProjectPage = ({
  projectTitle,
  websiteLink,
  projectDetails,
  highlights,
  iconNames,
  altImageLaptop,
  imageSrcLaptop,
  imageSrcPhone,
  altImagePhone,
  altImagePhone2,
  imageSrcPhone2,
}: Props) => {
  return (
    <div className="fixed tablet:pt-[78px] pt-10 w-full tablet:px-20 px-14">
      {altImageLaptop && imageSrcLaptop ? (
        <Image
          alt={altImageLaptop}
          src={imageSrcLaptop}
          width={300}
          className="absolute tablet:block hidden bottom-14 left-5 desktop:w-[400px]"
        />
      ) : (
        altImagePhone2 &&
        imageSrcPhone2 && (
          <Image
            alt={altImagePhone2}
            src={imageSrcPhone2}
            width={250}
            className="absolute tablet:block hidden top-48 left-44 "
          />
        )
      )}
      <Image
        alt={altImagePhone}
        src={imageSrcPhone}
        width={150}
        className="absolute tablet:block hidden top-24 right-24 desktop:w-[200px]"
      />

      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          {altImageLaptop && imageSrcLaptop ? (
            <Image
              alt={altImageLaptop}
              src={imageSrcLaptop}
              width={150}
              className="tablet:hidden block py-3 px-2"
            />
          ) : (
            altImagePhone2 &&
            imageSrcPhone2 && (
              <Image
                alt={altImagePhone2}
                src={imageSrcPhone2}
                width={100}
                className="tablet:hidden block py-3 px-2"
              />
            )
          )}
          <div className="flex flex-col items-center">
            <ParagraphTitle className="text-center" title={projectTitle} />
            {websiteLink && (
              <Link
                href={websiteLink}
                target="_blank"
                className="hover:text-[#CACACA] hover:cursor-pointer">
                Consulter le site
              </Link>
            )}
          </div>
        </div>

        <div className="tablet:pt-20 tablet:w-3/6 w-full text-center">
          <BodyText text={projectDetails}></BodyText>
          <BodyText text={highlights} className="pt-3"></BodyText>
          <div className="tablet:flex hidden flex-row flex-wrap justify-around items-center pt-8">
            {iconNames.map((iconName) => (
              <Icon size={70} name={iconName} key={iconName} className="ml-5 desktop:w-28" />
            ))}
          </div>

          <div className="tablet:hidden flex flex-row pt-8">
            <Image alt={altImagePhone} src={imageSrcPhone} width={100} className="h-fit" />
            <div className="tablet:hidden flex flex-row flex-wrap justify-around items-center">
              {iconNames.map((iconName) => (
                <Icon size={50} name={iconName} key={iconName} className="mx-2" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
