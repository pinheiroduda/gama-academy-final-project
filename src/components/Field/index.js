import React from 'react'

import Label from './Label/index'
import Content from '../Content'
import Input from './/Input/index'

const Text = ({ label, type, name }) => (
  <Label>
    <Content>{label}</Content>
    <Input type={type} name={name} />
  </Label>
)

const Field = {
  Text
}

export default Field
