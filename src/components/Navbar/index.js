import { IconBars } from '../../assets/icons/icons'
import LOGO from '../../assets/imgs/logo.png'

import styles from './navbar.module.css'

const Navbar = ({ onOpen = () => {} }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_content}>
        <button
          onClick={onOpen}
          className="w-full h-full grid place-items-center"
        >
          <IconBars className="w-6 h-w-6 object-contain" />
        </button>
        <div className="w-full h-full">
          <img
            src={LOGO}
            alt="Logo enlace mundial"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
