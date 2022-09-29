import { FC } from 'react'
import classNames from 'classnames'
import { imgPath } from '@/utils/helper'
import { CustomImage } from '@/components/ui'
import s from './work-templates.module.scss'

const RampTemplate: FC = () => {
  return <>
    <CustomImage
      className={classNames(s.image, s.center)}
      src={imgPath('ramp/ramp-single.webp')}
      width={1020}
      height={1020 / 2.1}
      dataScrollSpeed="2"
    />

    <CustomImage
      className={classNames(s.image, s.left)}
      src={imgPath('ramp/single.webp')}
      width={1020}
      height={1020 / 2.1}
      dataScrollSpeed="1"
    />

    <CustomImage
      className={classNames(s.image, s.right)}
      src={imgPath('ramp/single-episodes.webp')}
      width={1020}
      height={1020 / 2.1}
      dataScrollSpeed="2"
    />

    <CustomImage
      className={classNames(s.image, s.left)}
      src={imgPath('ramp/single-details.webp')}
      width={1020}
      height={1020 / 2.1}
      dataScrollSpeed="2"
    />

    <CustomImage
      className={classNames(s.image, s.center)}
      src={imgPath('ramp/player.webp')}
      width={1020}
      height={1020 / 2.1}
      dataScrollSpeed="1"
    />
  </>
}

export default RampTemplate