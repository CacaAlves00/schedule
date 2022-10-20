import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import DateDisplay from '../../components/DateDisplay/DateDisplay'
import useHandleNotLoggedIn from '../../hooks/useHandleNotLoggedIn'
import { ThemeStateInterface } from '../../redux/theme'
import './Schedule.scss'

function Schedule() {
  
  const [date, setDate] = useState<Date>(new Date())
  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
  useHandleNotLoggedIn()
  
  return (
    <article id="schedule">
      <header>
        <AiOutlinePlus className="icon" size={48} fill={primaryColor}/>

        <DateDisplay date={date} setDate={setDate} />
      </header>
    </article>
  )
}

export default Schedule