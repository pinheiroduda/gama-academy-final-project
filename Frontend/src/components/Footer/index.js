import React from 'react'

import FooterStyle, { A, Img, Nav, P } from './style'
import img from '../../assets/img.jpg'

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <Img src={img} alt="company logo" />
        <P>©2021 BreatheInBreatheOut.</P>
        <P>Todos os direitos reservados.</P>
      </div>
      <div>
        <Nav>
          <A href="https://instagram.com">Instagram</A>
          <A href="https://facebook.com">Facebook</A>
          <A href="https://wa.me/999999999">WhatsApp</A>
        </Nav>
      </div>
    </FooterStyle>
  )
}

export default Footer
