import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import theme from './redux/theme';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import App from './App'
import login from './redux/login';

const store = configureStore({
  reducer: {
    'theme': theme,
    'login': login
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)