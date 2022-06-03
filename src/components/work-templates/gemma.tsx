import { FC } from 'react'
import Image from 'next/image'
import { imgPath } from '@/utils/helper'
import './work-templates.module.scss'

const GemmaTemplate: FC = () => {
  return <>
    <div className="image center" data-scroll data-scroll-speed="2">
      <Image src={imgPath('ramp/ramp-single.gif')} width={600} height={400} />
    </div>
    <div className="image left" data-scroll data-scroll-speed="1">
      <Image src={imgPath('ramp/single.jpg')} width={600} height={400} />
    </div>
    <div className="image right" data-scroll data-scroll-speed="2">
      <Image src={imgPath('ramp/single-episodes.jpg')} width={600} height={400} />
    </div>
    <div className="image left" data-scroll data-scroll-speed="2">
      <Image src={imgPath('ramp/single-details.jpg')} width={600} height={400} />
    </div>
    <div className="image center" data-scroll data-scroll-speed="1">
      <Image src={imgPath('ramp/player.jpg')} width={600} height={400} />
    </div>
  </>
}

export default GemmaTemplate