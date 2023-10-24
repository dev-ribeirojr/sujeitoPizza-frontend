import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss'
import { icons } from "@/config/icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function ButtonClose({ ...rest }: ButtonProps) {

  return (
    <button
      className={styles.ButtonClose}
      {...rest}
    >
      {icons.close}
    </button>
  )
}