import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Calendar.scss'
import useHandleNotLoggedIn from '../../hooks/useHandleNotLoggedIn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import CalendarHeader from '../../components/CalendarHeader/CalendarHeader'
import CalendarMain from '../../components/CalendarMain/CalendarMain'

function Calendar() {

    const [date, setDate] = useState<Date>(new Date())

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    useHandleNotLoggedIn()

    return (
        <article id="calendar">
            <motion.div
                initial={{
                    scale: 0.97,
                    opacity: 0.4
                }}
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    duration: 0.7
                }}
            >
                <CalendarHeader date={date} setDate={setDate} />

                <CalendarMain date={date} />

            </motion.div>
        </article>
    )
}

export default Calendar