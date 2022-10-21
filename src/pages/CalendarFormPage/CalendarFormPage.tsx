import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import CalendarForm from '../../components/CalendarForm /CalendarForm'
import useHandleNotLoggedIn from '../../hooks/useHandleNotLoggedIn'
import { ThemeStateInterface } from '../../redux/theme'
import './CalendarFormPage.scss'

function CalendarFormPage() {


    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

    useHandleNotLoggedIn()

    return (
        <article id="calendar-form-page"
            style={{
                border: '2px solid',
                borderColor: `${primaryColor}`
            }}
        >
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
                <CalendarForm />
            </motion.div>
        </article>
    )
}

export default CalendarFormPage