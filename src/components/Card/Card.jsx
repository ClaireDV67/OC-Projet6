import styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card({ id, cover, title }) {
    return (
        <article className={styles.article}>
            <Link to={`/accomodation/${id}`}>
                <img className={styles.img} src={cover} alt={title} title={title} />
                <h2 className={styles.h2}>{title}</h2>
            </Link>
        </article>
    )
}

export default Card