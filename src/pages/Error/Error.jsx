import { Link } from "react-router-dom"
import styles from "./Error.module.css"

function Error() {
  return (
    <main role="main" className={styles.main}>
      <h2 className={styles.error}>404</h2>
      <div className={styles.text}>Oups ! La page que vous demandez n'existe pas.</div>
      <Link className={styles.link} to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error
