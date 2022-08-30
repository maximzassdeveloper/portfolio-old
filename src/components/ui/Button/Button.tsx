import { ButtonHTMLAttributes, forwardRef, ReactNode, useRef } from 'react'
import classNames from 'classnames'
import { useCursorHover, useMagnetic } from '@/hooks'
import { composeRef } from '@/utils/composeRef'
import s from './button.module.scss'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  className?: string
  icon?: ReactNode
  size?: 'small' | 'middle'
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {

  const { children, className, icon, size = 'middle', htmlType, ...rest } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

  useMagnetic(buttonRef.current)
  useCursorHover({ el: buttonRef.current, cursorClass: 'hoverLink' })

  const classes = classNames(s.button, s[size], className, {
    [s.onlyIcon]: !!icon && !children
  })

  return (
    <button
      ref={composeRef(buttonRef, ref)}
      className={classes}
      type={htmlType}
      {...rest}
    >
      {icon && <div className={s.icon}>{icon}</div>}
      {children}
    </button>
  )
})