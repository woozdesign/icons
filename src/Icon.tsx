import React, { FC } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.prop';
import { images } from './SvgPath';
const Icon: FC<IconProps> = ({ icon, color, size = 'medium' }) => {
  const SvgIcon = images[icon];
  const wrapperClass = `${styles[`wrapper--${size}`]} `;
  const iconClass = `${styles.icon} ${color ? styles[`icon--accent`] : ''}`.trim();

  return (
    <div className={styles.wrapper}>
      <SvgIcon data-accent-color={color} className={iconClass} />
    </div>
  );
};

export default Icon;
