import styles from './Select.module.css';
import type { SelectProps } from './Select.types';

const Select = ({ className, ...props }: SelectProps) => {
  return <select {...props} className={[styles.select, className].filter(Boolean).join(' ')} />;
};

export default Select;
