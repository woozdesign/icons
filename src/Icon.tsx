import React, { FC } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.prop';
import { images } from './SvgPath';
const sizes = {
  small: { width: '14px', height: '14px' },
  medium: { width: '18px', height: '18px' },
  large: { width: '24px', height: '24px' },
  xlarge: { width: '32px', height: '32px' },
};
const Icon: FC<IconProps> = ({ icon, color, size = 'medium' }) => {
  const SvgIcon = images[icon];
  const iconClass = `${styles.icon} ${color ? styles[`icon--accent`] : ''}`.trim();

  return <SvgIcon data-accent-color={color} className={iconClass} style={sizes[size]} />;
};

export default Icon;
