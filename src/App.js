import React from 'react'
import Main from './components/Main/index'
import Form from './components/Form/index'
import Field from './components/Field'

function App() {
  return (
    <Main>
      <Form>
        <Field.Text label="Email" name="email" type="email" />
      </Form>
    </Main>
  )
}

export default App
