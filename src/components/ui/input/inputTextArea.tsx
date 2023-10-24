import styles from "./input.module.scss";
import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: any,
  name: string
}

export function InputTextArea({ register, name, ...rest }: TextAreaProps) {

  return (
    <textarea
      className={styles.textArea}
      {...rest}
      {...register(name)}
    />
  )
}