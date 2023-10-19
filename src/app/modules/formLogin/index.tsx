import { Form } from "@/components/ui/form";
import { LabelIcon } from "@/components/ui/label";

import { icons } from "../../../config/icons"
import { InputText } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function FormLogin() {

  return (
    <Form>
      <LabelIcon icon={icons.email}>
        <InputText type="text" placeholder="Digite seu email" />
      </LabelIcon>
      <LabelIcon icon={icons.password}>
        <InputText type="password" placeholder="Digite sua senha" />
      </LabelIcon>
      <Button
        type="submit"
        loading={false}
      >
        Acessar Conta
      </Button>
    </Form>
  )
}