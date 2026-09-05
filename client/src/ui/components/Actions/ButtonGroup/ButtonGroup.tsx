import type { ButtonGroupProps } from './ButtonGroup.types';

import styles from './ButtonGroup.module.css';
import { classNames } from '../../../../utils/classNames';

const ButtonGroup = ({ children, gap = 'sm', className, ...props }: ButtonGroupProps) => {
  const classes = classNames(styles.group, styles[gap], className);

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

export default ButtonGroup;
