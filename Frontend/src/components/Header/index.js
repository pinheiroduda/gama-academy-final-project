import React from 'react'

import img from '../../assets/img.jpg'
import Home from '../Home'
import Form from '../Form'
import Footer from '../Footer'
import HeaderStyle, { A, Img, Nav } from './style'

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <Img src={img} alt="company logo" />
      </div>
      <div>
        <Nav>
          <A href={Home}>Home</A>
          <A href={Form}>Cadastro</A>
          <A href={Footer}>Contatos</A>
        </Nav>
      </div>
    </HeaderStyle>
  )
}

export default Header
