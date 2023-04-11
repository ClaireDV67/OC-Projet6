import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from "./Accommodation.module.css"
import Slideshow from "../../components/Slideshow/Slideshow"
import datas from "../../datas/accommodations.json"
import Collapse from "../../components/Collapse/Collapse"

function Accommodation() {
  // Récupération de l'id dans les paramètres de l"URL
  const { id } = useParams()
  const navigate = useNavigate()
  // Vérification de l'existence de données
  const [dataAccommodationOk, setDataAccommodationOk] = useState()
  const dataAccommodation = datas.find(data => data.id === id)
  useEffect(() => {
    setDataAccommodationOk(dataAccommodation)
    if (dataAccommodation === undefined) {
      navigate("/error")
    }
  }, [dataAccommodation, navigate])
  
  const equipments = dataAccommodationOk && dataAccommodation.equipments
  // Création des tags
  const tags = dataAccommodationOk && dataAccommodation.tags
  const createTags = () => dataAccommodationOk && tags.map(tag => <span className={styles.tags} key={`${tag}-${dataAccommodation.id}`}>{tag}</span>)
  // Séparation du nom de l'hôte en plusieurs parties
  const nameArray = dataAccommodationOk &&  dataAccommodation.host.name.split(" ")
  const name =  dataAccommodationOk && nameArray.map((word) => <span key={`${word}-${dataAccommodation}`}>{word}</span>)
  // Transformation de la note en "étoiles"
  const stars =  dataAccommodationOk && [1, 2, 3, 4, 5]
  const rating = () => dataAccommodationOk && stars.map((star) => Math.round(dataAccommodation.rating) >= star ? <i key={`${star}-${dataAccommodation.id}`} className={styles.star + " fa-solid fa-star"}></i> : <i key={`${star}-${dataAccommodation.id}`} className={styles.star + " " + styles.starNocolor + " fa-solid fa-star"}></i>)

	return (
    dataAccommodationOk && (
      <main role="main" className={styles.main}>
        <section aria-label="Carousel">
          <Slideshow
            pictures={dataAccommodation.pictures}
            title={dataAccommodation.title}
          />
        </section>
        <section aria-label="Informations principales" className={styles.introduction}>
          <div className={styles.mainIntroduction}>
            <h2 className={styles.h2}>{dataAccommodation.title}</h2>
            <div>{dataAccommodation.location}</div>
            <div className={styles.tagsContainer}>
              {createTags()}
            </div>
          </div>
          <div className={styles.hostInformations}>
              <div className={styles.host}>
                <div className={styles.nameHost}>{name}</div>
                <img className={styles.pictureHost} src={dataAccommodation.host.picture} alt={`${dataAccommodation.host.name}`} />
              </div>
              <div className={styles.rating}>
                {rating()}
              </div>
          </div>
        </section>
        <section aria-label="Détails du logement" className={styles.details}>
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
  )
}

export default Accommodation
