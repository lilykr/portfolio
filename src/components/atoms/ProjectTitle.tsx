import Image from 'next/image';

type Props = {
  alt: string;
  title: string;
  src: string;
};

export const ProjectTitle = ({ alt, title, src }: Props) => {
  return (
    <>
      <div className="pt-[calc(100vh-400px)] tablet:pt-[calc(100vh-450px)] laptop:pt-[calc(100vh-500px)]"></div>
      <div className="font-manrope text-h3 tablet:text-h2 desktop:text-h1">{title}</div>
      <Image alt={alt} src={src} className="rotate-90" />
      <div className="pb-[100px] laptop:pb-[150px]"></div>
    </>
  );
};
