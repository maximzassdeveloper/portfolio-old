import { ButtonHTMLAttributes, forwardRef, ReactNode, useRef, MouseEvent } from 'react'
import classNames from 'classnames'
import { useCursorHover } from '@/hooks'
import { composeRef } from '@/utils/composeRef'
import { dragOnHover } from '@/utils/dragOnHover'
import s from './button.module.scss'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  className?: string
  icon?: ReactNode
  size?: 'small' | 'middle'
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {

  const { children, className, icon, size = 'middle', htmlType, onMouseMove, ...rest } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

  useCursorHover(buttonRef, { cursorClass: 'hoverLink' })

  const mouseMoveHandler = (e: MouseEvent<HTMLButtonElement>) => {
    onMouseMove?.(e)

    const target = e.target as Element

    const btn = target.closest(`.${s.button}`) as HTMLButtonElement
    if (!btn) return

    dragOnHover(btn, e, 8)
  }

  const classes = classNames(s.button, className, s[size], {
    [s.onlyIcon]: !!icon && !children
  })

  return (
    <button 
      ref={composeRef(buttonRef, ref)}
      type={htmlType}
      className={classes}
      onMouseMove={mouseMoveHandler}
      {...rest}
    > 
      {icon && <div className={s.icon}>{icon}</div>}
      {children}
    </button>
  )
})