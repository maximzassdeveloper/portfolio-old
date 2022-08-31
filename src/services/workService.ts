import { IWork } from '@/types'
import { axios } from '@/utils/axios'

const BASE_URL = `${process.env.API_URL}`

export const workService = {
  getWorks() {
    return axios.get<IWork[]>(`${BASE_URL}/works`)
  },
  getWork(slug: string) {
    return axios.get<IWork>(`${BASE_URL}/works/${slug}`)
  }
}