import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import client from './apollo'
import AuthState from './context/auth/AuthState'
import ImageState from './context/auth/ImgContext'

const Entry = () => (
  <ApolloProvider client={client}>
    <AuthState>
      <ImageState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ImageState>
    </AuthState>
  </ApolloProvider>
)

ReactDOM.render(<Entry />, document.getElementById('root'))
