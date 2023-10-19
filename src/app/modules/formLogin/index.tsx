import { Form } from "@/components/ui/form";
import { LabelIcon } from "@/components/ui/label";

import { icons } from "../../../config/icons"
import { InputText } from "@/components/ui/input";

export function FormLogin() {

  return (
    <Form>
      <LabelIcon icon={icons.email}>
        <InputText type="text" placeholder="Digite seu email" />
      </LabelIcon>
      <LabelIcon icon={icons.password}>
        <InputText type="password" placeholder="Digite sua senha" />
      </LabelIcon>
    </Form>
  )
}