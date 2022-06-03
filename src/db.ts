import { ILinks, IWork } from '@/types'

export const links: ILinks = {
  'maxim-zasss@yandex.ru': 'mailto:maxim-zasss@yandex.ru',
  'GitHub': 'https://github.com/maximzassdeveloper',
  'Freelance': 'https://freelance.ru/maximzass',
}

export const works: IWork[] = [
  {
    id: 1,
    slug: "ramp",
    name: "Ramp",
    desc: "Стриминговый сервис фильмов и сериалов.",
    preview: "ramp/ramp-single.gif",
    color: "#C63636",
    role: [
      "Дизайн",
      "Фронтенд"
    ],
    stack: [
      "TypeScript",
      "React"
    ]
  },
  {
    id: 2,
    slug: "gemma-russia",
    name: "Gemma Russia",
    desc: "Интернет-магазин корейской продукции премиум-класса в России.",
    preview: "gemma/preview.jpg",
    color: "#6A4242",
    role: [
      "Дизайн",
      "Фронтенд",
      "Бэкенд"
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "PosgreSQL"
    ]
  },
  {
    id: 3,
    slug: "business-course",
    name: "Сайт бизнес-курса",
    desc: "Бизнес-курс “Искусство личных продаж МЛМ-предпринимателя 2022”.",
    preview: "business-course/preview.jpg",
    color: "radial-gradient(#FFA53C, #FF3C3C)",
    role: [
      "Дизайн",
      "Разработка"
    ],
    links: {
      'Смотреть сайт': "https://superstartmlm.ru"
    }
  }
]