import Card from "../components/card"
import styles from '../module/Flexbox.module.css'
import Loading from '../module/Loading.module.css'
import Select from 'react-select'
import { useEffect, useState } from "react"
import { getDepartments } from "../service/departement.service"
import { getDepartmentArtworksId, getArtworkById } from "../service/artwork.service"

const Galerie = () => {

  const [selectArrayDepartments, setDepartement] = useState([{ value: 1, label: "En Chargement" }])
  const [selectValue, setValue] = useState()
  const [arrayArtworksId, setArtworkId] = useState([])
  const [arrayArtworksIdSplice, setArtworkIdSplice] = useState([])
  const [arrayArtworks, setArtwork] = useState([])

  const FormateDepartementsArray = (departementsArray) => {
    const tempArray = departementsArray.map((element) => {
      return { value: element.departmentId, label: element.displayName }
    })
    return tempArray
  }

  const buildArtworksArray = () => {

    setArtworkIdSplice(arrayArtworksId.slice(0, 10))
    console.log(arrayArtworksIdSplice)
    setArtwork([])
    arrayArtworksIdSplice.map((idArtwork) => {
      const response = getArtworksByIdHandler(idArtwork)
      response.then((Artworks) => {
        setArtwork((previousState) => {
          return [
            ...previousState,
            { image: Artworks.primaryImageSmall, date: Artworks.accessionYear, title: Artworks.title, description: Artworks.creditLine }
          ]
        })

      })
    })
    console.log(arrayArtworks)
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
        
      {console.log(arrayArtworks)}
      {arrayArtworks.length !== arrayArtworksIdSplice.length ? (
        arrayArtworks.map((artwork) => {
          return <Card image={artwork.image} date={artwork.date} title={artwork.title} description={artwork.description} />
        })
      ) : (
        <div className={Loading["lds-ripple"]}><div></div><div></div></div>
      )}

      {console.log(arrayArtworks.length, " ", arrayArtworksIdSplice.length)}

      </div>
    </div>

  );
}

export default Galerie