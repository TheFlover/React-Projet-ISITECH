export const getDepartments = async () => {
    const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/departments",{
        method: 'GET',
      });
      const jsonResponse = await response.json()
      return jsonResponse.departments
}

