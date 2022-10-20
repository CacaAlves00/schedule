import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import DateDisplay from '../../components/DateDisplay/DateDisplay'
import './Schedule.scss'

function Schedule() {
  
  const [date, setDate] = useState<Date>(new Date())
  
  return (
    <article id="schedule">
      <header>
        <AiOutlinePlus size={48} />

        <DateDisplay date={date} setDate={setDate} />
      </header>
    </article>
  )
}

export default Schedule