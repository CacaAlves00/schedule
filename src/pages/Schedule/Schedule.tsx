import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import DateDisplay from '../../components/DateDisplay/DateDisplay'
import ScheduleForm from '../../components/ScheduleForm/ScheduleForm'
import ScheduleTable from '../../components/ScheduleTable/ScheduleTable'
import useHandleNotLoggedIn from '../../hooks/useHandleNotLoggedIn'
import { ThemeStateInterface } from '../../redux/theme'
import './Schedule.scss'

function Schedule() {

  const [date, setDate] = useState<Date>(new Date())
  const [showForm, setShowForm] = useState<boolean>(false)

  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
  useHandleNotLoggedIn()

  return (
    <article id="schedule">
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

        {!showForm &&
          <>
            <header>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                >
                <AiOutlinePlus
                  className="icon"
                  size={48}
                  fill={primaryColor}
                  onClick={() => setShowForm(true)}
                  />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <DateDisplay date={date} setDate={setDate} />
              </motion.div>
            </header>

            <main>
              <ScheduleTable date={date} />
            </main>
          </>
        }

        {showForm &&
          <aside>
            <ScheduleForm onSubmit={() => setShowForm(false)} />
          </aside>
        }
      </motion.div>
    </article>
  )
}

export default Schedule