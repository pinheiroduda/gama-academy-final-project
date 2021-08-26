import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import Reset from './styles/generic/reset'
import Base from './styles/elements/base'

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Base />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
