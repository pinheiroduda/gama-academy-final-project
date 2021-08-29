import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import schema from './validation'
import Field from '../Field/index'
import { FormDocumentStyle, Input, FormStyle, Title } from '../Form/style'
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
    <>
      <FormStyle onSubmit={handleSubmit(newUser)}>
        <Title> Formulário para cadastro </Title>
        <br></br>
        <Field.Text label="Nome" type="text" {...register('name')} />
        {errors?.name?.message}
        <Field.Text
          label="Cargo pretendido"
          type="text"
          {...register('position')}
        />
        {errors?.position?.message}
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
        {errors?.email?.message}
        <Field.Text label="Celular" type="tel" {...register('tel')} />
        {errors?.tel?.message}
        <Field.Text
          label="Data de nascimento"
          type="date"
          {...register('date')}
        />
        {errors?.date?.message}
        <Field.Text label="Endereço" type="text" {...register('address')} />
        {errors?.address?.message}
        <Field.Text label="Bairro" type="text" {...register('district')} />
        {errors?.district?.message}
        <Field.Text label="Cidade" type="text" {...register('city')} />
        {errors?.city?.message}
      </FormStyle>
      <FormDocumentStyle>
        <Title> Documentos </Title>
        <br></br>
        <Field.Text label="Identidade" type="text" {...register('email')} />
        {errors?.email?.message}
        <Field.Text label="CPF" type="text" {...register('tel')} />
        {errors?.tel?.message}
      </FormDocumentStyle>
      <Input type="submit" value="Enviar" />
    </>
  )
}

export default FormNew
