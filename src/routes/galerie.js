import Card from "../components/card"
import styles from '../module/Flexbox.module.css'
import Select from 'react-select'
import { useEffect, useState } from "react"
import { getDepartments } from "../service/departement.service"
import { getDepartmentArtworksId, getArtworkById } from "../service/artwork.service"

const Galerie = () => {

  const [selectArrayDepartments, setDepartement] = useState([{ value: 1, label: "En Chargement" }])
  const [selectValue, setValue] = useState()
  const [arrayArtworksId, setArtworkId] = useState([1, 2, 3, 4, 5])
  const [arrayArtworks, setArtwork] = useState([])

  const FormateDepartementsArray = (departementsArray) => {
    const tempArray = departementsArray.map((element) => {
      return { value: element.departmentId, label: element.displayName }
    })
    return tempArray
  }

  const buildArtworksArray = () => {
    arrayArtworksId.map((idArtwork) => {
      const response = getArtworksByIdHandler(idArtwork)
      response.then((Artworks) => {
        setArtwork((previousState) => {
          return [
            ...previousState,
            { image: Artworks.primaryImage, date: Artworks.accessionYear, title: Artworks.title, description: Artworks.creditLine }
          ]
        })

      })
    })
  }

  useEffect(() => {
    getDepartmentsHandler()
  }, [])

  const getDepartmentsHandler = async () => {
    const response = await getDepartments()

    setDepartement(FormateDepartementsArray(response))


  }

  const getArtworksIdHandler = async (idDepartment) => {
    const response = await getDepartmentArtworksId(idDepartment)
    setArtworkId(response.objectIDs)
  }

  const getArtworksByIdHandler = async (id) => {
    const response = await getArtworkById(id)
    return response
  }

  const handleChange = (selectValue) => {
    getArtworksIdHandler(selectValue.value)
    buildArtworksArray()
  }

  return (
    <div>
      <div style={{ margin: '1%', width: '20%', }}>
        <Select options={selectArrayDepartments} value={selectValue} onChange={handleChange} />
      </div>
      <div className={styles["flex-inline"]}>


        {arrayArtworks.map((artwork) => {
          return <Card image={artwork.image} date={artwork.date} title={artwork.title} description={artwork.description} />
        })}


      </div>
    </div>

  );
}

export default Galerie