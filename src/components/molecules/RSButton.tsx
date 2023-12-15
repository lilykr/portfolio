import Link from 'next/link';

import { Icon, IconName } from '@/components/atoms/Icon';

type Props = {
  linktoRS: string;
  iconName: IconName;
};

export const RSButton = ({ linktoRS, iconName }: Props) => {
  return (
    <Link target="_blank" href={linktoRS} className="m-[5px]">
      <Icon name={iconName} />
    </Link>
  );
};
