import Card from "../components/card"
import styles from '../module/Flexbox.module.css'
import Loading from '../module/Loading.module.css'
import Select from '../module/Select.module.css'
import { useEffect, useState } from "react"
import { getDepartments } from "../service/departement.service"
import { getDepartmentArtworksId, getArtworkById } from "../service/artwork.service"

const Galerie = () => {

  const [selectArrayDepartments, setDepartement] = useState([])
  const [loadingFinish, setloadingFinish] = useState(true)
  const [arrayArtworks, setArtwork] = useState([])

  useEffect(() => {
    getDepartmentsHandler()
  }, [])

  const getDepartmentsHandler = async () => {
    const response = await getDepartments()
    const tempArray = response.map((element) => {
      return { id: element.departmentId, label: element.displayName }
    })
    setDepartement(tempArray)
  }

  const handleChange = async (event) => {
    setloadingFinish(false)

    const responseDepartmentArtworksId = await getDepartmentArtworksId(event.target.value)

    const spliceID = responseDepartmentArtworksId.objectIDs.slice(0, 100);
    const new_artWorks = []
    await Promise.all(spliceID.map(async (idArtwork) => {
      const Artworks = await getArtworkById(idArtwork)

      if (Artworks.primaryImageSmall !== "") return new_artWorks.push({ image: Artworks.primaryImageSmall, date: Artworks.accessionYear, title: Artworks.title, description: Artworks.creditLine, link: Artworks.objectURL })
    }))

    setArtwork(new_artWorks)
    setloadingFinish(true)
  }

  return (
    <div>
      <div style={{ margin: '1%', width: '20%', }}>

        <select className={Select["select"]} onChange={handleChange} disabled={!loadingFinish}>
          {selectArrayDepartments.map((item, index) => (
            <option key={index} value={item.id} > {item?.label ?? ""} </option>
          ))}
        </select>

      </div>
      <div className={styles["flex-inline"]}>
        {loadingFinish ? arrayArtworks.map((artwork) => <Card image={artwork.image} date={artwork.date} title={artwork.title} description={artwork.description} link={artwork.link} />) : <div className={Loading["lds-ripple"]}><div></div><div></div></div>}
      </div>
    </div>

  );
}

export default Galerie