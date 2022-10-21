import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { ThemeStateInterface } from '../../../redux/theme'
import './CalendarDate.scss'
import { CalendarObjectInterface, fetchCalendarEvents } from '../../../api/calendar'
import CalendarOffcanvas from '../../CalendarOffcanvas/CalendarOffcanvas'

interface CalendarDatePropsInterface {
  date: Date
}

function CalendarDate({ date }: CalendarDatePropsInterface) {

  const [events4Today, setEvents4Today] = useState<CalendarObjectInterface[]>([])
  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
  const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)
  const theme = useSelector((state: ThemeStateInterface) => state.theme.theme)
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false)

  useEffect(() => {
    fetchCalendarEvents(date)
      .then((apiAnswer) => setEvents4Today(apiAnswer.payload))
      .catch((error) => console.log(error))
  }, [date])

  function getDateFormated(): string {
    return date.toLocaleDateString('en-us', {
      day: "numeric"
    })
  }

  function getBackgroundColor() {
    if (!gotAnyEventsForToday())
      return 'transparent'

    if (theme === 'dark')
      return secondaryColor
    else
      return '#d0cfec'
  }

  function gotAnyEventsForToday(): boolean {
    return events4Today?.length > 0
  }

  return (
    <>
      <motion.div id="calendar-date"
        style={{
          borderColor: gotAnyEventsForToday() ? 'transparent' : primaryColor,
          backgroundColor: getBackgroundColor()
        }}
        whileHover={{
          scale: 1.1
        }}
        transition={{
          duration: 0.3
        }}
        onClick={() => setShowOffcanvas(true)}
      >
        {getDateFormated()}
      </motion.div>

      <CalendarOffcanvas
        isShowing={showOffcanvas}
        hide={() => setShowOffcanvas(false)}
        events={events4Today}
      />
    </>
  )
}

export default CalendarDate