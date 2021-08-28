import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import schema from './validation'
import Field from '../Field/index'
import FormStyle from '../Form/style'

const FormNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const newUser = user => {
    console.log(user)
  }

  return (
    <FormStyle onSubmit={handleSubmit(newUser)}>
      <Field.Text label="Nome" type="text" {...register('name')} />
      {errors?.name?.message}
      <Field.Text label="Email" type="email" {...register('email')} />
      {errors?.email?.message}
      <input type="submit" value="Enviar" />
    </FormStyle>
  )
}

export default FormNew
