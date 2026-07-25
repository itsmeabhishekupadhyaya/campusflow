import type { LabelProps } from './Label.types';

import styles from './Label.module.css';

const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  );
};

export default Label;
