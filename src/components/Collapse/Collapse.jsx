import styles from "./Collapse.module.css"
import { useState } from "react"

function Collapse({ titleCollapse, textCollapse }) {
    const [isOpen, setIsOpen] = useState(false)
    const [animation, setAnimation] = useState(0)

    function close() {
        setAnimation(0);
        setTimeout(() => {setIsOpen(false)}, 590);
    }

    function open() {
        setIsOpen(true);
        setAnimation(1);
    }
 
    return isOpen ? (
        <div className={styles.collapse} animation={animation}>
            <button aria-haspopup="true" aria-expanded="true" className={styles.button} onClick={() => close()}><h3 className={styles.title}>{titleCollapse}</h3><i className={styles.icone + ' fa-solid fa-chevron-down fa-1x'} animation={animation}></i></button>
            <div className={styles.containerText}>{textCollapse}</div>
        </div>
    ) : (
        <div className={styles.collapse} animation={animation}>
            <button aria-haspopup="true" aria-expanded="false" className={styles.button} onClick={() => open()}><h3 className={styles.title}>{titleCollapse}</h3><i className={styles.icone + ' fa-solid fa-chevron-down fa-1x'} animation={animation}></i></button>
        </div>
    )
}

export default Collapse