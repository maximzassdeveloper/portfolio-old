import { forwardRef, ReactNode, InputHTMLAttributes, useState, FocusEvent, TextareaHTMLAttributes, useRef } from 'react'
import { FieldError } from 'react-hook-form'
import classNames from 'classnames'
import { composeRef } from '@/utils/composeRef'
import { useCursorHover } from '@/hooks'
import s from './input.module.scss'

export interface InputProps extends
  Omit<InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>, 'defaultValue'> {
  value?: string | number
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  label?: string
  defaultValue?: string | number
  addonBefore?: ReactNode
  addonAfter?: ReactNode
  className?: string
  textarea?: boolean
  error?: FieldError
}

type Elem = HTMLInputElement & HTMLTextAreaElement

export const Input = forwardRef<Elem, InputProps>((props, ref) => {

  const {
    className,
    name,
    value,
    label,
    disabled,
    type = 'text',
    error,
    autoComplete = 'off',
    textarea,
    addonAfter,
    addonBefore,
    onFocus,
    onBlur,
    ...rest
  } = props
  const [filled, setFilled] = useState(false)
  const inputRef = useRef<Elem>(null)
  const Tag = textarea ? 'textarea' : 'input'

  useCursorHover({ el: inputRef.current, cursorClass: 'hoverInput' })

  const focusHandler = (e: FocusEvent<Elem>) => {
    setFilled(true)
    onFocus?.(e)
  }

  const blurHandler = (e: FocusEvent<Elem>) => {
    if (!String(value).trim()) {
      setFilled(false)
    }
    onBlur?.(e)
  }

  const classes = classNames([s.input], className, {
    [s.inputError]: error?.message,
    [s.disabled]: disabled,
    [s.filled]: filled
  })

  return (
    <div className={classes}>
      {addonBefore}
      {label && <label className={s.label}>{label}</label>}
      <Tag
        ref={composeRef(inputRef, ref)}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        disabled={disabled}
        onFocus={focusHandler}
        onBlur={blurHandler}
        {...rest}
      />
      {error && <span className={s.error}>{error.message}</span>}
      {addonAfter}
    </div>
  )
})