import styled from 'styled-components'

const FormStyle = styled.form`
  max-width: 300px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
`

export default FormStyle

export const FormDocumentStyle = styled.form`
  max-width: 300px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 5px;
  padding: 20px;
`

export const Input = styled.input`
  margin: 20px;
`
