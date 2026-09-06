import styles from './DatePicker.module.css';
import type { DatePickerProps } from './DatePicker.types';

const DatePicker = ({ className, ...props }: DatePickerProps) => {
  return (
    <input
      type="date"
      {...props}
      className={[styles.datePicker, className].filter(Boolean).join(' ')}
    />
  );
};

export default DatePicker;
