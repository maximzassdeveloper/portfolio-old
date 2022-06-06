import { IMG_URL } from "@/config"

export const imgPath = (path: string) => {
  return `${IMG_URL}/${path}`
}

export const isEmpty = (obj: Object) => {
  return Object.keys(obj).length === 0
}