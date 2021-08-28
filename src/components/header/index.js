import React from 'react'

import img from '../../assets/img.jpg'
import Home from '../Home'
import FormNew from '../FormNew'
import Footer from '../Footer'
import HeaderStyle from './style'

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <img src={img} alt="company logo" />
      </div>
      <div>
        <nav>
          <a href={Home}>Home</a>
          <a href={FormNew}>Cadastro</a>
          <a href={Footer}>Contatos</a>
        </nav>
      </div>
    </HeaderStyle>
  )
}

export default Header
