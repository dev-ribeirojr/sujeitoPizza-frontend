import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';
import { icons } from '@/config/icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean,
  children: ReactNode
  background: '#3fffa3' | '#ff3f4b',
  color: "#FFF" | "#101026"
}

export function Button({ children, loading, color, background, ...rest }: ButtonProps) {
  return (
    <button
      className={styles.button}
      style={{
        background: background,
        color: color,
      }}
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