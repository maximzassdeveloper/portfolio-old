export type IRole = 'Дизайн' | 'Фронтенд' | 'Бэкенд' | 'Разработка'
export type IWorkSlugs = 'ramp' | 'gemma-russia' | 'business-course'

export interface IWork {
  id: number
  slug: IWorkSlugs
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