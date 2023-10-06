import React, { FC } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.prop';
import { images } from './SvgPath';
const Icon: FC<IconProps> = ({ type, color, size = 'medium', className, style }) => {
  const SvgIcon = images[type];
  // const wrapperClass = `${styles[`wrapper--${size}`]} `;
  const iconClass = `${styles.icon} ${styles[`icon--${size}`]} ${(color ? styles[`icon--accent`] : '', className)}`.trim();

  return (
    // <span className={wrapperClass}>
    <SvgIcon data-accent-color={color} className={iconClass} style={style} />
    // </span>
  );
};

export default Icon;
