import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react';

import { SortDirection } from '../../../../../shared/enums/SortDirection';

import type { SortIconProps } from './SortIcon.types';

import styles from './SortIcon.module.css';
import Icon from '../Icon';

const SortIcon = ({ active, direction }: SortIconProps) => {
  if (!active) {
    return <ArrowUpDown className={styles.icon} size={16} />;
  }

  return direction === SortDirection.Ascending ? (
    <Icon icon={ArrowUp} size="sm" />
  ) : (
    <Icon icon={ArrowDown} size="sm" />
  );
};

export default SortIcon;
