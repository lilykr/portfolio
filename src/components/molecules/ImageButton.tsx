import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string;
  alt: string;
  src: string | StaticImport;
};

export const ImageButton = ({ href, alt, src }: Props) => {
  return (
    <Link href={href} className="flex items-center justify-center">
      <div className="relative flex items-center justify-center mb-[70px] laptop:mr-[30px] w-[40%] h-[40%] laptop:w-[400px] laptop:h-[400px] laptop:mb-[0px]">
        <Image src={src} alt={alt} />
        <p className="absolute opacity-[50%] text-body20 laptop:text-title80 font-bold font-manrope">
          Mobile
        </p>
      </div>
    </Link>
  );
};
