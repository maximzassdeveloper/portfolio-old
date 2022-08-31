import type { NextApiRequest, NextApiResponse } from 'next'
import { works } from '@/data'
import { IWork } from '@/types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWork[]>
) {
  return res.status(200).json(works)
}