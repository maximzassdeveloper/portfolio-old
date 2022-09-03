import { NextPage, GetServerSideProps } from 'next'
import { SingleWork } from '@/components/screens'
import { IWork } from '@/types'
import { workService } from '@/services/workService'

interface WorkPageProps {
  work: IWork
}

const WorkPage: NextPage<WorkPageProps> = ({ work }) => {
  return (
    <SingleWork work={work} />
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const data = await workService.getWork(`${params?.slug}`)

    if (!data) {
      return { notFound: true }
    }

    return {
      props: {
        work: data
      }
    }
  } catch {
    return { notFound: true }
  }
}

export default WorkPage