import styles from './headerRegister.module.scss';
import { ButtonBorderTop } from "@/components/ui/button";
import { icons } from "@/config/icons";

export function HeaderRegister() {

  return (
    <div className={styles.header}>
      <ButtonBorderTop
        icon={icons.newUser}
        text={"Adicionar Usuário"}
      />
      <ButtonBorderTop
        icon={icons.addCategory}
        text={"Cadastrar Categorias"}
      />
      <ButtonBorderTop
        icon={icons.add}
        text={"Cadastrar Produtos"}
      />
    </div>
  )
}