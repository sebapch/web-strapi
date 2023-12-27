import { API_URL, STRAPI_URL } from "../config"

export async function getHouses() {
    const res = await fetch(`${API_URL}/realstates?populate=*`)
    if (!res.ok){
      throw new Error('something went wrong')
    }
    const { data } = await res.json()
    return data
  }

  export function getCoverImage ({attributes}){
    const {url} = attributes.cover.data.attributes
    return `${STRAPI_URL}${url}`
  }