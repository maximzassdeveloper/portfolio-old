import { FC } from "react"
import { CustomLink } from "@/components/ui"
import s from "./screen404.module.scss"

export const Screen404: FC = () => {
  return (
    <section className={s.notfound} data-scroll-section>
      <div className={s.container}>
        <div className={s.preloaderCircle}></div>

        <div className={s.content}>
          <h1>404</h1>
          <p>Страница не найдена ((0(</p>
          <CustomLink route="/" className={s.link}>
            Вернуться на главную
          </CustomLink>
        </div>
      </div>
    </section>
  )
}
