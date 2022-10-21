import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { ThemeStateInterface } from '../../../redux/theme'
import './CalendarDate.scss'

interface CalendarDatePropsInterface {
  date: Date
}

function CalendarDate({ date }: CalendarDatePropsInterface) {

  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

  function getDateFormated(): string {
    return date.toLocaleDateString('en-us', {
      day: "numeric"
    })
  }

  return (
    <motion.div id="calendar-date" style={{ borderColor: primaryColor }}
      whileHover={{
        scale: 1.1
      }}
      transition={{
        duration: 0.3
      }}
    >
      {getDateFormated()}
    </motion.div>
  )
}

export default CalendarDate