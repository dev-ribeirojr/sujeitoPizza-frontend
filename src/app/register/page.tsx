import styles from './register.module.scss'
import { Header } from "@/components/header";
import { Container } from "@/components/ui/container";
import { FormRegister } from './modules/formRegister';


export default function Register() {

  return (
    <Container>
      <Header />
      <main className={styles.container}>
        <div className={styles.banner}></div>
        <FormRegister />
      </main>
    </Container>
  )

}