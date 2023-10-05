import React, { FC } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.prop';
import { images } from './SvgPath';

const Icon: FC<IconProps> = ({ icon, color, size = 'medium' }) => {
  const SvgIcon = images[icon];
  const iconClass = `${styles.icon} ${styles[`icon--${size}`]} ${color ? styles[`icon--accent`] : ''}`.trim();

  return <SvgIcon data-accent-color={color} className={iconClass} />;
};

export default Icon;
