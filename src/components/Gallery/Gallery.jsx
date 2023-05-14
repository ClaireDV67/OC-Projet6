import styles from "./Gallery.module.css"
import Card from "../Card/Card"
import { useEffect, useState } from "react"

function Gallery() {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch("/datas/accommodations.json", {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
        .then(response => response.json())
        .then(value => setDatas(value))
        .catch(error => console.log(error))
    }, [])

    return ( datas && datas.length>0 && (
        <section aria-label="Galerie appartements" className={styles.gallery}>
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
    ))
}

export default Gallery