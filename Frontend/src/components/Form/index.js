import React from 'react'
import { useState } from 'react'

import axios from 'axios'
import { Input, Title, FormWrapper, Button } from './style'

const Form = () => {
  const fetchAddress = async () => {
    const { data: address } = await axios.get(
      `https://viacep.com.br/ws/${form.cep}/json/`
    )

    const { logradouro, bairro, localidade } = address
    console.log(address)
    setForm({
      ...form,
      logradouro,
      district: bairro,
      city: localidade
    })
  }

  const createCandidate = async candidate => {
    try {
      const user = await axios.post(
        'https://gama-final-backend.herokuapp.com/register',
        form
      )
      if (user.status === 200) {
        alert('casdastro concluído')
      }
    } catch (error) {
      alert('erro: dados já cadastrados')
    }
  }

  const [form, setForm] = useState({
    name: '',
    position: '',
    date: '',
    gender: '',
    email: '',
    phone: '',
    cep: '',
    logradouro: '',
    district: '',
    city: '',
    id: '',
    cpf: ''
  })

  return (
    <>
      <Title> Formulário para cadastro </Title>
      <FormWrapper>
        <label>Nome</label>
        <Input
          onChange={e => {
            setForm({ ...form, name: e.target.value })
          }}
          value={form.name}
        ></Input>

        <label>Cargo Pretendido</label>
        <Input
          onChange={e => {
            setForm({ ...form, position: e.target.value })
          }}
          value={form.position}
        ></Input>

        <label>Data de nascimento</label>
        <Input
          type="date"
          onChange={e => {
            setForm({ ...form, date: e.target.value })
          }}
          value={form.date}
        ></Input>

        <label>Gênero</label>
        <Input
          onChange={e => {
            setForm({ ...form, gender: e.target.value })
          }}
          value={form.gender}
        ></Input>

        <label>Email</label>
        <Input
          onChange={e => {
            setForm({ ...form, email: e.target.value })
          }}
          value={form.email}
        ></Input>

        <label>Celular</label>
        <Input
          onChange={e => {
            setForm({ ...form, phone: e.target.value })
          }}
          value={form.phone}
        ></Input>

        <label>CEP</label>
        <Input
          onBlur={() => {
            fetchAddress()
          }}
          onChange={e => {
            setForm({ ...form, cep: e.target.value })
          }}
          value={form.cep}
        ></Input>

        <label>Endereço</label>
        <Input
          onChange={e => {
            setForm({ ...form, logradouro: e.target.value })
          }}
          value={form.logradouro}
        ></Input>

        <label>Bairro</label>
        <Input
          onChange={e => {
            setForm({ ...form, district: e.target.value })
          }}
          value={form.district}
        ></Input>

        <label>Cidade</label>
        <Input
          onChange={e => {
            setForm({ ...form, city: e.target.value })
          }}
          value={form.city}
        ></Input>

        <Title>Documentos</Title>

        <label>Identidade</label>
        <Input
          onChange={e => {
            setForm({ ...form, id: e.target.value })
          }}
          value={form.id}
        ></Input>

        <label>CPF</label>
        <Input
          onChange={e => {
            setForm({ ...form, cpf: e.target.value })
          }}
          value={form.cpf}
        ></Input>

        <Button onClick={() => createCandidate()}>Cadastrar</Button>
      </FormWrapper>
    </>
  )
}

export default Form
