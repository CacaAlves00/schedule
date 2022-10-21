import React from 'react'
import { motion } from 'framer-motion'
import './CalendarHeader.scss'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import MonthDisplay from '../MonthDisplay/MonthDisplay'
import YearDisplay from '../YearDisplay /YearDisplay'
import { useNavigate } from 'react-router-dom'

interface CalendarHeaderPropsInterface {
    date: Date,
    setDate: Function
}

function CalendarHeader({ date, setDate }: CalendarHeaderPropsInterface) {
 
    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    
    const navigate = useNavigate()

    function openForm() {
        navigate('/calendar-form')
    }

    return (
        <header id="calendar-header">
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
            >
                <AiOutlinePlus
                    className="icon"
                    size={'3rem'}
                    fill={primaryColor}
                    onClick={openForm}
                />
            </motion.div>

            <div id="date-container">

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                >
                    <MonthDisplay date={date} setDate={setDate} />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                >
                    <YearDisplay date={date} setDate={setDate} />
                </motion.div>
            </div>
        </header>
    )
}

export default CalendarHeader