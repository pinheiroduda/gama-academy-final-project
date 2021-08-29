import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FormStyle = styled.form`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`

export const Input = styled.input`
  margin: 5px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #fff;
  cursor: pointer;
  padding: 5px;
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  padding-top: 25px;
  margin-bottom: 20px;
`

export const Button = styled.button`
  margin: 5px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid #fff;
  cursor: pointer;
  padding: 5px;
`
