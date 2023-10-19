import styles from './input.module.scss'
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function InputText({ ...rest }: InputProps) {

  return (
    <input className={styles.input} {...rest} />
  )
}