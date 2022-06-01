import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import s from './hoc.module.scss'

interface ContaineProps {
  className?: string
}

export const Container: FC<PropsWithChildren<ContaineProps>> = ({ children, className }) => {
  return (
    <div className={classNames(s.container, className)}>
      {children}
    </div>
  )
}