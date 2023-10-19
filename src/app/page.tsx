import styles from './home.module.scss';
import logoImg from '../../public/logo.svg';
import Image from 'next/image';
import { FormLogin } from './modules/formLogin';


export default function Home() {
  return (
    <main className={styles.containerCenter}>
      <Image src={logoImg} alt='Logo Sujeito Pizzaria' />
      <FormLogin />
    </main>
  )
}
