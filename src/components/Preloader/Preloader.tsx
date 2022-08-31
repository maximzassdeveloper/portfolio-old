import { FC } from 'react'
import s from './preloader.module.scss'

export const Preloader: FC = () => {
  return (
    <div className={s.preloader}>
      <div className={s.progress}>

      </div>
    </div>
  )
}