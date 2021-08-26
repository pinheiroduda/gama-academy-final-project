import React from 'react'

import Form from '../Form/index'
import Field from '../Field/index'

const FormNew = () => (
  <Form>
    <Field.Text label="Email" name="email" type="email" />
  </Form>
)

export default FormNew
