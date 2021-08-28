import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().min(2).required('Nome é obrigatório (min 2 caracteres)'),
  email: yup.string().email().required('Email é obrigatório')
})

export default schema
