import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';
import { icons } from '@/config/icons';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode
}

export function Button({ children, loading, ...rest }: ButtonProps) {
  return (
    <button
      className={styles.button}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <span className={styles.loading}>
          {icons.loading}
        </span>
      )
        :
        (
          <a className={styles.button}>
            {children}
          </a>
        )}
    </button>
  )
}