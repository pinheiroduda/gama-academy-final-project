import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().min(2).required('Nome é obrigatório (min 2 caracteres)'),
  position: yup.string().required('Cargo pretendido é obrigatório)'),
  email: yup.string().email().required('Email é obrigatório'),
  tel: yup.string().required('Celular é obrigatório (min 11 caracteres'),
  date: yup.date().required('Data de nascimento é obrigatória'),
  address: yup.string().required('Endereço é obrigatório'),
  district: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatória')
})

export default schema
