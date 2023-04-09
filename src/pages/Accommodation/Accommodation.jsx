import { useParams } from 'react-router-dom'
import styles from './Accommodation.module.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import datas from '../../datas/accommodations.json'
import Collapse from '../../components/Collapse/Collapse'

function Accommodation() {
  const { id } = useParams()
  const dataAccommodation = datas.filter(data => data.id === id)[0]
  const tags = dataAccommodation.tags
  const equipments = dataAccommodation.equipments
  const stars = [1, 2, 3, 4, 5]
  const rating = () => {
    return stars.map((star) => Math.round(dataAccommodation.rating) >= star ? <i className={styles.star + " fa-solid fa-star"}></i> : <i className={styles.star + ' ' + styles.starNocolor + " fa-solid fa-star"}></i>)
  }

  return (
    <main className={styles.main}>
      <section>
        <Slideshow
          pictures={dataAccommodation.pictures}
          title={dataAccommodation.title}
        />
      </section>
      <section className={styles.introduction}>
        <div className={styles.mainIntroduction}>
          <h2 className={styles.h2}>{dataAccommodation.title}</h2>
          <div>{dataAccommodation.location}</div>
          <div>
            {tags.map(tag => {
                return (<span className={styles.tags} key={`${tag}-${dataAccommodation.id}`}>{tag}</span>)
            })}
          </div>
        </div>
        <div className={styles.hostInformations}>
            <div className={styles.host}>
              <div>{dataAccommodation.host.name}</div>
              <img className={styles.pictureHost} src={dataAccommodation.host.picture} alt={`${dataAccommodation.host.name}`} />
            </div>
            <div className={styles.rating}>
              {rating()}
            </div>
        </div>
      </section>
      <section className={styles.details}>
            <Collapse
              titleCollapse="Description"
              textCollapse={dataAccommodation.description}
            />
            <Collapse
              titleCollapse="Équipements"
              textCollapse={
                <ul>
                  {equipments.map(equipment => {
                    return (<li key={`${equipment}-${dataAccommodation.id}`}>{equipment}</li>)
                  })}
                </ul>
              }
            />
      </section>
    </main>
  )
}

export default Accommodation
