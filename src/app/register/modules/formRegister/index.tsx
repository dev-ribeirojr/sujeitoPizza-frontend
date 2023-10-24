'use client'
import styles from './formRegister.module.scss';
import { ButtonBorderTop } from "@/components/ui/button";
import { icons } from "@/config/icons";
import { useState } from 'react';
import { NewProduct } from '../newProduct';
import { NewCategory } from '../newCategory';
import { NewUser } from '../newUser';

export function FormRegister() {

  const [formActive, setFormActive] = useState<any>("PRODUCT")

  return (
    <>
      <div className={styles.header}>
        <ButtonBorderTop
          icon={icons.newUser}
          text={"Adicionar Usuário"}
          onClick={() => setFormActive("USER")}
        />
        <ButtonBorderTop
          icon={icons.addCategory}
          text={"Cadastrar Categorias"}
          onClick={() => setFormActive("CATEGORY")}
        />
        <ButtonBorderTop
          icon={icons.add}
          text={"Cadastrar Produtos"}
          onClick={() => setFormActive("PRODUCT")}
        />
      </div>
      {formActive === "PRODUCT" && <NewProduct />}
      {formActive === "CATEGORY" && <NewCategory />}
      {formActive === "USER" && <NewUser />}
    </>
  )
}