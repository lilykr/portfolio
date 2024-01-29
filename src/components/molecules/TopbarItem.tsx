import Link from 'next/link';

type Props = {
  href: string;
  title: string;
  isActive: boolean;
};

export const TopbarItem = ({ href, title, isActive }: Props) => {
  return (
    <div className="flex flex-row items-center pl-3 laptop:pl-5">
      {isActive && <div className="w-[6px] h-[6px] rounded-full bg-white" />}
      <Link href={href}>
        <p className="laptop:pl-[10px] pl-1 hover:text-[#CACACA]">{title}</p>
      </Link>
    </div>
  );
};
