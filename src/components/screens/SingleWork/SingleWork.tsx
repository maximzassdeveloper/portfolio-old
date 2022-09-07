import { FC, } from 'react'
import { Container, Main } from '@/components/hoc'
import { Title, CustomLink } from '@/components/ui'
import { NextWork } from './NextWork/NextWork'
import { imgPath, isEmpty } from '@/utils/helper'
import { IWork } from '@/types'
import WorkTemplate from '@/components/work-templates'
import s from './single-work.module.scss'


interface SingleWorkProps {
  work: IWork
  nextWork?: IWork
}

export const SingleWork: FC<SingleWorkProps> = ({ work, nextWork }) => {

  const renderTemplate = () => {
    const Content = WorkTemplate[work.slug]
    return Content ? <Content /> : null
  }

  return (
    <Main>
      <div className={s.work} data-scroll-section>
        <div className={s.bgWrapper}>
          <div
            className={s.bg}
            style={{ backgroundImage: `url(${imgPath(work.preview)})` }}
          >
            <div
              className={s.blurBg}
              style={{ backgroundImage: `url(${imgPath(work.preview)})` }}
            />
          </div>
        </div>

        <Container>
          <Title
            className={s.title}
            level='h1'
            splitText
            data-scroll
            data-scroll-speed='2'
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
                  <CustomLink className={s.link} key={name + url} href={url} blank showArrow>{name}</CustomLink>
                )}
              </div>
            )}
          </div>

          <div className={s.content}>
            {renderTemplate()}
          </div>

        </Container>

        <NextWork work={nextWork} />
      </div>
    </Main>
  )
}