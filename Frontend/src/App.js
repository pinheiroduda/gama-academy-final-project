import React from 'react'

import Header from './components/Header'
import Home from './components/Home'
import { FormWrapper } from './components/Form/style'
import FormNew from './components/FormNew'
import Footer from './components/Footer'
import { Main } from './components/Main/style'

function App() {
  return (
    <Main>
      <Header />
      <Home />
      <FormWrapper>
        <FormNew />
      </FormWrapper>
      <Footer />
    </Main>
  )
}

export default App
