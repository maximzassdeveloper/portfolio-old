import { FC } from 'react'
import { Work } from '../Work/Work'
import { works } from '@/data'
import s from './work-list.module.scss'

export const WorkList: FC = () => {
  return (
    <div
      className={s.horizontal}
    >
      <div
        className={s.scrolled}
        data-scroll
        data-scroll-sticky={true}
        data-scroll-target={`.${s.horizontal}`}
      >
        <div className={s.list}>
          {works.map(work =>
            <Work key={work.id} work={work} />
          )}
        </div>
      </div>
    </div>
  )
}