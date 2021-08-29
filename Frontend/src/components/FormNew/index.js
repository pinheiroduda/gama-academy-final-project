import React from 'react'
import { useForm } from 'react-hook-form'

import Field from '../Field/index'
import { FormDocumentStyle, Input, FormStyle, Title } from '../Form/style'
const FormNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const newUser = user => {
    console.log(user)
  }

  return (
    <>
      <Title> Formulário para cadastro </Title>
      <FormStyle onSubmit={handleSubmit(newUser)}>
        <Field.Text label="Nome" type="text" {...register('name')} />
        <Field.Text
          label="Cargo pretendido"
          type="text"
          {...register('position')}
        />
        <select {...register('gender')}>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="other">Outro</option>
        </select>
        <select {...register('marital-status')}>
          <option value="married">Casado(a)</option>
          <option value="single">Solteiro(a)</option>
          <option value="other">Outro</option>
        </select>
        <Field.Text label="Email" type="email" {...register('email')} />
        <Field.Text label="Celular" type="tel" {...register('tel')} />
        <Field.Text
          label="Data de nascimento"
          type="date"
          {...register('date')}
        />
        <Field.Text label="Endereço" type="text" {...register('address')} />
        <Field.Text label="Bairro" type="text" {...register('district')} />
        <Field.Text label="Cidade" type="text" {...register('city')} />
      </FormStyle>
      <FormDocumentStyle>
        <Title> Documentos </Title>
        <br></br>
        <Field.Text label="Identidade" type="text" {...register('email')} />
        <Field.Text label="CPF" type="text" {...register('tel')} />
      </FormDocumentStyle>
      <Input type="submit" value="Enviar" />
    </>
  )
}

export default FormNew
