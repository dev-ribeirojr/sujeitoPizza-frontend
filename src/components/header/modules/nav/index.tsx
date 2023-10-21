import styles from './nav.module.scss'
import Link from "next/link";
import { icons } from "@/config/icons";

export function Nav() {

  return (
    <nav className={styles.nav}>
      {/* perfil do usuário */}
      <Link href={"/me"}>
        <span>
          {icons.user}
        </span>
        Perfil
      </Link>

      {/* cadastros */}
      <Link href={"/register"}>
        <span>
          {icons.box}
        </span>
        Cadastros
      </Link>

      {/* catalogo de produtos */}
      <Link href={"/catalog"}>
        <span>
          {icons.catalog}
        </span>
        Catalogo
      </Link>
    </nav>
  )
}