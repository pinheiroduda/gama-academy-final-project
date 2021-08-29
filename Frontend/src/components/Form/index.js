import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { Input, Title, FormWrapper, Button } from './style'

const Form = () => {
  const fetchAddress = async () => {
    const { data: address } = await axios.get(
      `https://viacep.com.br/ws/${form.cep}/json/`
    )

    const { logradouro, bairro, localidade } = address

    setForm({ ...form, logradouro, district: bairro, city: localidade })
  }

  const createCandidate = async candidate => {
    const user = await axios.post('http://localhost:5000/register', form)
    if (user.status === 200) {
      alert('deu certo')
    }
    alert('deu errado')
  }

  // const createCandidate = async (candidate) => {
  //   try {
  //     const user = await axios.post('http://localhost:5000/register', form);
  //     if (user.status === 200) {
  //       alert('iti malia deu certo');
  //     }

  //   } catch (error) {
  //     setCpfError(true);
  //   }
  // }; // ver esssa parte

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
            setForm({ ...form, contact: e.target.value })
          }}
          value={form.contact}
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
