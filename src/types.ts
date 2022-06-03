export type IRole = 'Дизайн' | 'Фронтенд' | 'Бэкенд' | 'Разработка'

export interface IWork {
  id: number
  slug: string
  name: string
  desc: string
  preview: string
  color: string
  role?: IRole[]
  stack?: string[]
  links?: ILinks
}

export interface ILinks {
  [name: string]: string
}