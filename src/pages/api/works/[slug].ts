import { NextApiRequest, NextApiResponse } from 'next'
import { works } from '@/data'
import { IWork } from '@/types'

export default function workHandler(
  req: NextApiRequest,
  res: NextApiResponse<IWork | null>
) {
  const { slug } = req.query
  const filtered = works.filter(work => work.slug === slug)

  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : null
}