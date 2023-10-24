import styles from './input.module.scss'
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any,
  name: string
}

export function InputText({ register, name, ...rest }: InputProps) {

  return (
    <input
      className={styles.input}
      {...register(name)}
      {...rest}
    />
  )
}