import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'mínimo 2 caracteres')
    .required('Nome é obrigatório'),
  email: yup.string().email().required('Email é obrigatório')
})

export default schema
