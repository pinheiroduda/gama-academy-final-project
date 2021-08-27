import React from 'react'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers'

// import schema from './validation'
import Header from '../header'
import img from '../../assets/img.jpg'
import Home from '../Home'
import Form from '../Form/index'
import Field from '../Field/index'
import Button from '../Button'
import Footer from '../Footer'

const FormNew = () => {
  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema)
  // })

  // const newUser = user => {}

  // <Form onSubmit={handleSubmit(newUser)}>
  //   <Field.Text label="Nome" name="name" type="text" {...register} />
  //   {errors.name?.message}
  //   <Field.Text label="Email" name="email" type="email" {...register} />
  //   {errors.email?.message}
  //   <Button>Enviar</Button>
  // </Form>

  return (
    <>
      <Header>
        <div>
          <img src={img} />
        </div>
        <div>
          <nav>
            <a href={Home}>Home</a>
            <a href={Form}>Cadastro</a>
            <a href={Footer}>Contatos</a>
          </nav>
        </div>
      </Header>
      <Home>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            dolorem maxime repudiandae. Delectus quisquam enim ipsa! Obcaecati
            eos, ullam illum quibusdam facere nulla sint hic velit rem alias
            illo a.
          </p>
        </div>
      </Home>
      <Form>
        <Field.Text label="Nome" name="name" type="text" />
        <Field.Text label="Email" name="email" type="email" />
        <Button>Enviar</Button>
      </Form>
      <Footer>
        <div>
          <h1>Teste</h1>
        </div>
      </Footer>
    </>
  )
}

export default FormNew
