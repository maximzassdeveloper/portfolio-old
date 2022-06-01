import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { Main } from '@/components/hoc'
import { Title } from '@/components/ui'
import { IWork } from '@/types'
import { works } from '@/db'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface WorkPageProps {
  work: IWork
}

const WorkPage: NextPage = () => {

  const [work, setWork] = useState<IWork | null>(null)
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const founded = works.find(i => i.slug === slug)
    if (founded) setWork(founded)
  }, [])

  return (
    <Main>
      <Title>{work?.name}</Title>
    </Main>
  )
}

// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
//   try {
// 		const paths = works.map(work => ({
// 			params: { slug: work.slug },
// 		}))

// 		return {
// 			paths,
// 			fallback: 'blocking',
// 		}
// 	} catch (e) {
// 		// console.log(errorCatch(e))

// 		return {
// 			paths: [],
// 			fallback: false,
// 		}
// 	}
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const work = works.find(i => i.slug === params?.slug)
//     if (!work) throw new Error('Work not found')

//     return { props: { work } }
//   } catch {
//     return { notFound: true }
//   }
// }

export default WorkPage