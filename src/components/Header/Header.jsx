import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-header.png'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className='visually-hidden'>Kasa, location immobilière entre particuliers</h1>
      <img className={styles.img} src={logo} alt="Logo de Kasa" />
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}><Link className={styles.a} to="/">Accueil</Link></li>
          <li className={styles.li}><Link className={styles.a} to="/about">À Propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
