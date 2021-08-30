import React from 'react'

import img from '../../assets/img.jpg'
import HeaderStyle, { Img, Title } from './style'

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <Img src={img} alt="company logo" />
      </div>
      <div>
        <Title>Seja bem vindo à JobsNet!</Title>
      </div>
    </HeaderStyle>
  )
}

export default Header
