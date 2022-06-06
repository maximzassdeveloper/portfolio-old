import { FC, } from 'react'
import { Container } from '@/components/hoc'
import { Title, CustomLink } from '@/components/ui'
import { imgPath, isEmpty } from '@/utils/helper'
import { IWork } from '@/types'
import s from './single-work.module.scss'
import WorkTemplate from '@/components/work-templates'


interface SingleWorkProps {
  work: IWork
}

export const SingleWork: FC<SingleWorkProps> = ({ work }) => {

  const renderTemplate = () => {
    const Content = WorkTemplate[work.slug]
    return Content ? <Content /> : null
  }

  return (
    <div className={s.work} data-scroll-section>
      <div 
        className={s.bg}
        style={{
          backgroundImage: `url(${imgPath(work.preview)})`,
          backgroundColor: work.color
        }}
      />
      <Container>
        <Title 
          className={s.title} 
          level='h1'
          splitText
        >
          {work.name}
        </Title>

        <div className={s.info}>

          <div className={s.line}>
            {work.role?.length && (
              <div className={s.list}>
                <Title level='h3'>Роль</Title>
                {work.role.map(roleName => 
                  <span key={roleName}>{roleName}</span>
                )}
              </div>
            )}
            {work.stack?.length && (
              <div className={s.list}>
                <Title level='h3'>Технологии</Title>
                {work.stack.map(tech => 
                  <span key={tech}>{tech}</span>
                )}
              </div>
            )}
          </div>

          <p className={s.desc}>{work.desc}</p>

          {work.links && !isEmpty(work.links) && (
            <div className={s.links}>
              {Object.entries(work.links).map(([name, url]) => 
                <CustomLink key={name+url} notSpaLink={url}>{name}</CustomLink>
              )}
            </div>
          )}
        </div>

        <div className={s.content}>
          {renderTemplate()}
        </div>

      </Container>
    </div>
  )
}