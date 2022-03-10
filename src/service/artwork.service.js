export const getDepartmentArtworksId = async (idDepartment) => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2022-01-01&departmentIds=${idDepartment}`,{
        method: 'GET',
      });
      const jsonResponse = await response.json()
      return jsonResponse
}

export const getArtworkById = async (idArtwork) => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${idArtwork}`,{
        method: 'GET',
      });
      const jsonResponse = await response.json()
      return jsonResponse
}
