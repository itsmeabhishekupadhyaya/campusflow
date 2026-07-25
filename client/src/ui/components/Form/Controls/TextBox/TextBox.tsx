import { classNames } from '../../../../../utils/classNames';
import styles from './TextBox.module.css';

import type { TextBoxProps } from './TextBox.types';

const TextBox = ({ className, ...props }: TextBoxProps) => {
  return <input {...props} className={classNames(styles.textBox, className)} />;
};

export default TextBox;
