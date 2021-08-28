import React from 'react'

import Main from './components/Main/index'
import Header from './components/Header'
import Home from './components/Home'
import FormNew from './components/FormNew'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Main>
        <FormNew />
      </Main>
      <Footer />
    </>
  )
}

export default App
