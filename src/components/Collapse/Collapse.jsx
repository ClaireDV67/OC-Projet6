import styles from "./Collapse.module.css"
import { useState } from "react"

function Collapse({ titleCollapse, texteCollapse }) {
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div className={styles.collapse}>
            <button className={styles.button} onClick={() => setIsOpen(false)}><h2 className={styles.title}>{titleCollapse}</h2><i className="fa-solid fa-chevron-up fa-1x"></i></button>
            <p className={styles.texte}>{texteCollapse}</p>
        </div>
    ) : (
        <div className={styles.collapse}>
            <button className={styles.button} onClick={() => setIsOpen(true)}><h2 className={styles.title}>{titleCollapse}</h2><i className="fa-solid fa-chevron-down fa-1x"></i></button>
        </div>
    )
}

export default Collapse