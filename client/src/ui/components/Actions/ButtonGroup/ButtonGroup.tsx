import type { ButtonGroupProps } from './ButtonGroup.types';

import styles from './ButtonGroup.module.css';

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <div className={styles.group}>{children}</div>;
};

export default ButtonGroup;
