import styles from "./Slideshow.module.css"
import { useEffect, useState } from "react";

function Slideshow( {pictures, title} ) {
    const [count, setCount] = useState(0);
    const [animation, setAnimation] = useState(0)

    const previousSlide = () => {
        if (count === 0) {
            setCount(pictures.length - 1)
        } else {
            setCount(count-1)
        }
    }

    const nextSlide = () => {
        if (count === pictures.length - 1) {
            setCount(0)
        } else {
            setCount(count+1)
        }
    }

    useEffect(() => {
        if (animation === 0 ) {
            setAnimation(1)
        } else {
            setAnimation(0)
        }
    }, [count])

    return pictures.length === 1 ? ( 
            <div className={styles.carousel}>
                <img className={styles.slide} src={pictures[count]} alt={title} title={title} />
                <span className={styles.counter}>{count+1}/{pictures.length}</span>
            </div>
        ) : (
        <div className={styles.carousel}>
            <button aria-label="Image précédente" className={styles.button + " " + styles.arrowLeft} onClick={() => previousSlide()}><i className={styles.arrow + " fa-solid fa-chevron-left"}></i></button>
            <img className={styles.slide} animation={animation} src={pictures[count]} alt={title} title={title}/>
            <span className={styles.counter}>{count+1}/{pictures.length}</span>
            <button aria-label="Image suivante" className={styles.button +  " " + styles.arrowRight} onClick={() => nextSlide()}><i className={styles.arrow + " fa-solid fa-chevron-right"}></i></button>
        </div>
        )
}

export default Slideshow