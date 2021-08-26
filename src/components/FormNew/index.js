import React from 'react'
import { useForm } from 'react-hook-form'

import Form from '../Form/index'
import Field from '../Field/index'
import Button from '../Button'

const FormNew = () => {
  const { register, handleSubmit } = useForm()

  const newUser = user => {}

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Text label="Nome" name="name" type="text" {...register} />
      <Field.Text
        label="Data de Nascimento"
        name="date"
        type="date"
        {...register}
      />
      <Field.Text label="Email" name="email" type="email" {...register} />
      <Field.Text label="Contato" name="number" type="tel" {...register} />
      <Field.Text label="Endereço" name="address" type="tel" {...register} />
      <Field.Text label="Bairro" name="district" type="text" {...register} />
      <Field.Text label="Cidade" name="city" type="text" {...register} />
      <Field.Text label="CEP" name="cep" type="text" {...register} />

      <Button>Enviar</Button>
    </Form>
  )
}

export default FormNew
