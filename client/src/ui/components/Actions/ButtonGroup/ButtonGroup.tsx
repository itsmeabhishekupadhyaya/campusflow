import type { ButtonGroupProps } from './ButtonGroup.types';

import styles from './ButtonGroup.module.css';

const ButtonGroup = ({ children, gap = 'sm' }: ButtonGroupProps) => {
  const classes = [styles.group, styles[gap]].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
};

export default ButtonGroup;
