import styles from './Gallery.module.css'
import Card from '../Card/Card'
import datas from '../../datas/accomodations.json'

function Gallery() {
    return (
        <section className={styles.gallery}>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </section>
    )
}

export default Gallery