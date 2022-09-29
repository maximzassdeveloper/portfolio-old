import { FC } from 'react'
import classNames from 'classnames'
import { imgPath } from '@/utils/helper'
import { CustomImage } from '@/components/ui'
import s from './work-templates.module.scss'

const GemmaTemplate: FC = () => {
  return <>
    <CustomImage
      className={classNames(s.image, s.left)}
      src={imgPath('gemma/home.webp')}
      width={1020}
      height={1020 / 0.43}
      dataScrollSpeed="1"
    />

    <div className={s.row}>
      <div className={s.col}>
        <CustomImage
          className={classNames(s.image, s.left)}
          src={imgPath('gemma/catalog.webp')}
          width={1020}
          height={1020 / 1.25}
          dataScrollSpeed="1"
        />
        <CustomImage
          className={classNames(s.image, s.right)}
          src={imgPath('gemma/cart.webp')}
          width={1020}
          height={1020 / 1.97}
          dataScrollSpeed="2"
        />
        <CustomImage
          className={classNames(s.image, s.right)}
          src={imgPath('gemma/register.webp')}
          width={1020}
          height={1020 / 1.91}
          dataScrollSpeed="2"
        />
      </div>
      <div className={s.col}>
        <CustomImage
          className={classNames(s.image, s.right)}
          src={imgPath('gemma/partners.webp')}
          width={1020}
          height={1020 / 0.41}
          dataScrollSpeed="1"
        />
      </div>
    </div>

    <div className={s.row}>
      <div className={s.col}>
        <CustomImage
          className={classNames(s.image, s.left)}
          src={imgPath('gemma/single-product.webp')}
          width={1020}
          height={1020 / 0.76}
          dataScrollSpeed="2"
        />
      </div>
      <div className={s.col}>
        <CustomImage
          className={classNames(s.image, s.right)}
          src={imgPath('gemma/single-product-reviews.webp')}
          width={1020}
          height={1020 / 1.31}
          dataScrollSpeed="1"
        />
        <CustomImage
          className={classNames(s.image, s.left)}
          src={imgPath('gemma/single-product-details.webp')}
          width={1020}
          height={1020 / 1.31}
          dataScrollSpeed="1"
        />
      </div>
    </div>
  </>
}

export default GemmaTemplate