import { FC } from 'react'
import { Container } from '@/components/hoc'
import { CustomLink } from '@/components/ui'
import { IWork } from '@/types'
import { imgPath } from '@/utils/helper'
import s from './next-work.module.scss'

interface NextWorkProps {
  work?: IWork
}

export const NextWork: FC<NextWorkProps> = ({ work }) => {

  if (!work) return null

  return (
    <div className={s.next}>
      <Container className={s.container}>
        <CustomLink className={s.link} href={`/work/${work.slug}`}>
          <div className={s.content}>
            <span className={s.text}>Следующий проект</span>
            <h3 className={s.title}>{work.name}</h3>
          </div>
          <div
            className={s.image}
            style={{ backgroundImage: `url(${imgPath(work.preview)})` }}
          />
        </CustomLink>
      </Container>
    </div>
  )
}