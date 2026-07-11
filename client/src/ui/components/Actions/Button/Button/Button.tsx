import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';
import { Icon } from '../../../Display/Icon';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {startIcon && <Icon icon={startIcon} size={size} />}

      <span>{children}</span>

      {endIcon && <Icon icon={endIcon} size={size} />}
    </button>
  );
};

export default Button;
