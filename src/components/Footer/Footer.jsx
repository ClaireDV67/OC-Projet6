import styles from './Footer.module.css'
import logo from '../../assets/images/logo-footer.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.img} src={logo} alt='Logo de Kasa' />
      <div className={styles.div}>© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}

export default Footer
