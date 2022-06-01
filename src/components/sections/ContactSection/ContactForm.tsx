import { FC } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Input, Title } from '@/components/ui'
import s from './contact.module.scss'
import { CustomLink } from '@/components/CustomLink/CustomLink'

interface ContactFormProps {
  
}

interface FormInputs {
  name: string
  connect: string
  message: string
}

export const ContactForm: FC<ContactFormProps> = () => {

  const { handleSubmit, control } = useForm<FormInputs>({defaultValues: {
    name: '',
    connect: '',
    message: ''
  }})

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <div className={s.form}>
      <Title className={s.title} splitText dataScroll>Оставить заявку</Title>

      <form onSubmit={onSubmit}>

        <div className={s.line}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => <Input label='Ваше имя' {...field} error={fieldState.error} />}
          />

          <Controller
            name='connect'
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState }) => <Input label='Телеграм / телефон / почта' {...field} error={fieldState.error} />}
          />
        </div>

        <Controller
          name='message'
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState }) => <Input textarea label='Ваше сообщение' {...field} error={fieldState.error} />}
        />

        <Button className={s.button} htmlType='submit'>Отправить</Button>
        <p className={s.text}>Нажимая на кнопку, вы даете согласие на обработку <CustomLink route='privacy'>персональных данных</CustomLink></p>

      </form>

    </div>
  )
}