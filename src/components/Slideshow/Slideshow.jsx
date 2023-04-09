import styles from './Slideshow.module.css'
import { useState } from 'react';

function Slideshow( {pictures, title} ) {
    const [count, setCount] = useState(0);

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

    return pictures.length === 1 ? ( 
            <div className={styles.carousel}>
                <img className={styles.slide} src={pictures[count]} alt={title} />
            </div>
        ) : (
        <div className={styles.carousel}>
            <i className={styles.arrow + ' ' + styles.arrowLeft + ' fa-solid fa-chevron-left'} onClick={() => previousSlide()}></i>
            <img className={styles.slide} src={pictures[count]} alt={title} />
            <i className={styles.arrow +  ' ' + styles.arrowRight + ' fa-solid fa-chevron-right'} onClick={() => nextSlide()}></i>
        </div>
        )
}

export default Slideshow