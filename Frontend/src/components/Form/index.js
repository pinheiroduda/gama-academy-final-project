import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Input, FormStyle, Title, Select } from './style'

const Form = () => {
  const fetchAddress = async () => {
    const address = await axios.get(
      `https://viacep.com.br/ws/${form.cep}/json/`
    )
    setForm({ ...form, logradouro: address.data.logradouro })
  }

  const createCandidate = async candidate => {
    const user = await axios.post('http://localhost:5000/register', form)
    if (user.status === 200) {
      alert('deu certo')
    }
    alert('deu errado')
  }

  const [form, setForm] = useState({
    name: '',
    cep: '',
    email: '',
    gender: '',
    logradouro: ''
  })

  useEffect(() => {
    console.log(form)
  }, [form])

  return (
    <>
      <Title> Formulário para cadastro </Title>
      <FormStyle>
        <label>Nome</label>
        <Input
          onChange={e => {
            setForm({ ...form, name: e.target.value })
          }}
          value={form.name}
        ></Input>
        <label>Email</label>
        <Input
          onChange={e => {
            setForm({ ...form, email: e.target.value })
          }}
          value={form.email}
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
        <label>endereço</label>
        <Input
          onChange={e => {
            setForm({ ...form, logradouro: e.target.value })
          }}
          value={form.logradouro}
        ></Input>
        <label>Gênero</label>
        <Input
          onChange={e => {
            setForm({ ...form, gender: e.target.value })
          }}
          value={form.gender}
        ></Input>
        {/* <Title>Documentos</Title>
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
        ></Input> */}
        <button onClick={() => createCandidate()}>Cadastrar</button>
      </FormStyle>
    </>
  )
}

export default Form
