import React from 'react'
import { motion } from 'framer-motion'
import './Calendar.scss'
import useHandleNotLoggedIn from '../../hooks/useHandleNotLoggedIn'

function Calendar() {

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

            </motion.div>
        </article>
    )
}

export default Calendar