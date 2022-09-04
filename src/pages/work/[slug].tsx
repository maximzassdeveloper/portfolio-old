import { NextPage, GetServerSideProps } from 'next'
import { SingleWork } from '@/components/screens'
import { IWork } from '@/types'
import { workService } from '@/services/workService'

interface WorkPageProps {
  work: IWork
  nextWork?: IWork
}

const WorkPage: NextPage<WorkPageProps> = ({ work, nextWork }) => {
  return (
    <SingleWork
      work={work}
      nextWork={nextWork}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = `${params?.slug}`
    const work = workService.getWork(slug)
    const nextWork = workService.getNextWork(slug)

    if (!work) {
      return { notFound: true }
    }

    return {
      props: {
        work,
        nextWork
      }
    }
  } catch {
    return { notFound: true }
  }
}

export default WorkPage