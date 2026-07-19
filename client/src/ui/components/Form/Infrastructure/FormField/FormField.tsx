import Label from '../Label';
import RequiredIndicator from '../RequiredIndicator';

import type { FormFieldProps } from './FormField.types';

import styles from './FormField.module.css';

const FormField = ({
  children,
  label,
  inputId,
  required = false,
  helperText,
  error,
}: FormFieldProps) => {
  return (
    <div className={styles.formField}>
      <div className={styles.labelContainer}>
        <Label htmlFor={inputId}>{label}</Label>

        {required && <RequiredIndicator />}
      </div>

      {children}

      {error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        helperText && <p className={styles.helperText}>{helperText}</p>
      )}
    </div>
  );
};

export default FormField;
