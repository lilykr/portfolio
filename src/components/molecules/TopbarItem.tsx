import Link from 'next/link';

type Props = {
  href: string;
  title: string;
  isActive: boolean;
};

export const TopbarItem = ({ href, title, isActive }: Props) => {
  return (
    <div className="flex flex-row items-center">
      {isActive && <div className="w-[6px] h-[6px] rounded-full bg-white" />}
      <Link href={href}>
        <p className="pl-[10px]">{title}</p>
      </Link>
    </div>
  );
};
