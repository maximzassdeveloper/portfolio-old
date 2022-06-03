import { FC } from 'react'
import { CustomLink } from '@/components/ui'
import { links } from '@/db'

interface SocialListProps {
  className?: string
  linkClassName?: string
}

export const SocialList: FC<SocialListProps> = ({ className, linkClassName }) => {
  return (
    <div className={className}>
      {Object.entries(links).map(([name, url]) => 
        <CustomLink key={name} className={linkClassName} notSpaLink={url}>{name}</CustomLink>
      )}
    </div>
  )
}