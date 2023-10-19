import styles from './label.module.scss'
import { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  icon: ReactNode
}

export function LabelIcon({ icon, children, ...rest }: LabelProps) {
  return (
    <label
      className={styles.label}
      {...rest}
    >
      {children}
      <span>
        {icon}
      </span>
    </label>
  )
}