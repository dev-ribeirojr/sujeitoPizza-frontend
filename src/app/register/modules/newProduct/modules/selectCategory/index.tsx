import styles from "./selectCategory.module.scss";
import { SelectHTMLAttributes, useEffect, useState } from "react";

import { icons } from "@/config/icons";
import { setupAPICliente } from "@/services/api";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  register: any,
  name: string
}

interface ListCategory {
  id: string
  name: string,
}

export function SelectCategory({ register, name, ...rest }: SelectProps) {

  const [listCategory, setListCategory] = useState<ListCategory[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function loadingCategorys() {
      try {
        const apiClient = setupAPICliente();

        const response = await apiClient.get("/category")
        setListCategory(response.data)

      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    loadingCategorys()

  }, [])

  return (
    <div className={styles.select}>
      {loading ? (
        <div className={styles.loading}> {icons.loading}</div>
      ) : (
        <>
          <select {...register(name)} {...rest} >
            {listCategory && listCategory.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </>
      )}
      <span>
        {icons.arrowSelect}
      </span>
    </div>
  )
}