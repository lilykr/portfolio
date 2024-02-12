import Link from 'next-intl/link';

type Props = {
  href: string;
  title: string;
  isActive: boolean;
};

export const TopbarItem = ({ href, title, isActive }: Props) => {
  return (
    <div className="flex flex-row items-center pl-3 tablet:pl-5">
      {isActive && <div className="w-[6px] h-[6px] rounded-full bg-white" />}
      <Link href={href}>
        <p className="tablet:pl-[10px] pl-1 hover:text-[#CACACA]">{title}</p>
      </Link>
    </div>
  );
};
