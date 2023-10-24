import styles from './register.module.scss'
import { Header } from "@/components/header";
import { Container } from "@/components/ui/container";
import { HeaderRegister } from "./modules/headerRegister";
import NewUser from './modules/newUser';
import { NewCategory } from './modules/newCategory';
import { NewProduct } from './modules/newProduct';

export default function Register() {

  return (
    <Container>
      <Header />
      <main className={styles.container}>
        <div className={styles.banner}></div>
        <HeaderRegister />
        {false &&
          <NewUser />
        }
        {false &&
          < NewCategory />
        }
        {true &&
          <NewProduct />
        }
      </main>
    </Container>
  )

}