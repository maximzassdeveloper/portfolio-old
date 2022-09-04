import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Input, Title, CustomLink } from '@/components/ui'
import s from './contact.module.scss'

interface FormInputs {
  name: string
  connect: string
  message: string
}

export const ContactForm: FC = () => {

  const { handleSubmit, control } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      connect: '',
      message: ''
    }
  })

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <div className={s.form}>
      <Title className={s.title} splitText data-scroll>Оставить заявку</Title>

      <form onSubmit={onSubmit}>

        <div className={s.line}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) =>
              <Input label='Ваше имя' className={s.input} {...field} error={fieldState.error} />
            }
          />

          <Controller
            name='connect'
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) =>
              <Input label='Телеграм / телефон / почта' className={s.input} {...field} error={fieldState.error} />
            }
          />
        </div>

        <Controller
          name='message'
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) =>
            <Input textarea label='Ваше сообщение' className={s.input} {...field} error={fieldState.error} />
          }
        />

        <Button className={s.button} htmlType='submit'>Отправить</Button>
        <p className={s.text}>Нажимая на кнопку, вы даете согласие на обработку <CustomLink href='/privacy'>персональных данных</CustomLink></p>

      </form>

    </div>
  )
}