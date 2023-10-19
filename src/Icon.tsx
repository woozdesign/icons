import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Icon.module.scss';
import { IconProps } from './Icon.prop';
import { images } from './SvgPath';
const Icon: FC<IconProps> = ({ type, color, size = 'medium', className, style, highContrast = false }) => {
  const SvgIcon = images[type];
  const iconClasses = classNames(styles.icon, styles[`icon--${size}`], className, { [styles[`icon--accent`]]: color, [styles[`highContrast`]]: highContrast });

  return <SvgIcon data-accent-color={color} className={iconClasses} style={style} />;
};

export default Icon;
