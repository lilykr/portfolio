import * as Icons from '../icons';

export type IconName = keyof typeof Icons;

type Props = {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
};

export const Icon = ({ name = 'Linkedin', size = 24, className, color }: Props) => {
  // eslint-disable-next-line import/namespace
  const IconComponent = Icons[name];
  return (
    <IconComponent
      width={size}
      height={size}
      className={className}
      style={color ? { color } : {}}
    />
  );
};
