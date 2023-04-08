import { Link } from "react-router-dom"
import styles from "./Error.module.css"

function Error() {
  return (
    <main className={styles.main}>
      <div className={styles.error}>404</div>
      <div className={styles.text}>Oups ! La page que vous demandez n'existe pas.</div>
      <Link className={styles.link} to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error
