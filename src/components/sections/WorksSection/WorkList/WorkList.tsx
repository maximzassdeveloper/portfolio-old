import { FC } from 'react'
import { Work } from '../Work/Work'
import { works } from '@/data'
import s from './work-list.module.scss'

/* TODO: Закоммитить */

export const WorkList: FC = () => {
  return (
    <div
      id='horizontalWorks'
      className={s.horizontal}
    // style={{ height: 100 * works.length + 'vh' }}
    >
      <div
        className={s.scrolled}
        data-scroll
        data-scroll-sticky
        data-scroll-target='#horizontalWorks'
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