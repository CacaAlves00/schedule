import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from './redux/theme'
import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import './App.scss'
import Schedule from './pages/Schedule/Schedule'
import ErrorPage from './pages/ErrorPage/ErrorPage'


function App() {
  const backgroundColor = useSelector((state: ThemeStateInterface) => state.theme.backgroundColor)
  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

  return (
    <article className="App" style={{
      backgroundColor: backgroundColor,
      color: primaryColor
    }}>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </article>
  )
}

export default App
