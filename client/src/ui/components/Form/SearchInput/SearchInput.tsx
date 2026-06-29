import type { SearchInputProps } from './SearchInput.types';
import styles from './SearchInput.module.css';

const SearchInput = ({ className = '', ...props }: SearchInputProps) => {
  const classes = [styles.input, className].filter(Boolean).join(' ');

  return <input type="text" className={classes} {...props} />;
};

export default SearchInput;
