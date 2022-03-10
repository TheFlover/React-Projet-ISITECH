export const getDepartmentArtworksId = async (idDepartment) => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${idDepartment}`,{
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
