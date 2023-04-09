import styles from "./Collapse.module.css"
import { useState } from "react"

function Collapse({ titleCollapse, textCollapse }) {
    const [isOpen, setIsOpen] = useState(false)
    const [animation, setAnimation] = useState(0)
    function changeClose() {
        setAnimation(0);
        setTimeout(() => {setIsOpen(false)}, 590);
    }

    function changeOpen() {
        setIsOpen(true);
        setAnimation(1);
    }
 
    return isOpen ? (
        <div className={styles.collapse} animation={animation}>
            <button className={styles.button} onClick={() => changeClose()}><h2 className={styles.title}>{titleCollapse}</h2><i className={styles.icone + ' fa-solid fa-chevron-down fa-1x'} animation={animation}></i></button>
            <div className={styles.containerText}>{textCollapse}</div>
        </div>
    ) : (
        <div className={styles.collapse} animation={animation}>
            <button className={styles.button} onClick={() => changeOpen()}><h2 className={styles.title}>{titleCollapse}</h2><i className={styles.icone + ' fa-solid fa-chevron-down fa-1x'} animation={animation}></i></button>
        </div>
    )
}

export default Collapse