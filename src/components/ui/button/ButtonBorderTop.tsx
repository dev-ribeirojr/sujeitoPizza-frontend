import styles from './button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string,
  icon: ReactNode
}

export function ButtonBorderTop({ text, icon, ...rest }: ButtonProps) {

  return (

    <button
      className={styles.buttonBorderTop}
      {...rest}
    >
      <div className={styles.borderTop}></div>
      <div className={styles.areaChildrenButtonBorderTop}>
        <span>{icon}</span>
        <p>{text}</p>
      </div>
    </button>
  )
}