import React, { FC } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.prop';
import { images } from './SvgPath';
const Icon: FC<IconProps> = ({ type, color, size = 'medium' }) => {
  const SvgIcon = images[type];
  const wrapperClass = `${styles[`wrapper--${size}`]} `;
  const iconClass = `${styles.icon} ${color ? styles[`icon--accent`] : ''}`.trim();

  return (
    <span className={wrapperClass}>
      <SvgIcon data-accent-color={color} className={iconClass} />
    </span>
  );
};

export default Icon;
