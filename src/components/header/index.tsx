import styles from './header.module.scss';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { Nav } from './modules/nav';
import { icons } from '@/config/icons';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <Image src={logo} alt='Logo' />
        <Nav />
      </div>

      <Button>
        <span>
          {icons.logOut}
        </span>
        Logout
      </Button>
    </header>
  )
}