import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from './redux/theme'
import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import Calendar from './pages/Calendar/Calendar'
import './App.scss'
import Schedule from './pages/Schedule/Schedule'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ScheduleFormPage from './pages/ScheduleFormPage/ScheduleFormPage'
import CalendarFormPage from './pages/CalendarFormPage/CalendarFormPage'
import SignIn from './pages/SignIn/SignIn'
import Diet from './pages/Diet/Diet'
import DietFormPage from './pages/DietFormPage/DietFormPage'


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
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/schedule-form" element={<ScheduleFormPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar-form" element={<CalendarFormPage />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/diet-form" element={<DietFormPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </article>
  )
}

export default App
