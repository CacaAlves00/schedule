import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScheduleForm from '../../components/ScheduleForm/ScheduleForm'
import useHandleNotLoggedIn from '../../hooks/useHandleNotLoggedIn'
import { ThemeStateInterface } from '../../redux/theme'
import './ScheduleFormPage.scss'

function ScheduleFormPage() {


    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)

    const navigate = useNavigate()

    useHandleNotLoggedIn()

    function onSubmit() {
        navigate('/schedule')
    }

    return (
        <article id="schedule-form-page"
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
                <ScheduleForm />
            </motion.div>
        </article>
    )
}

export default ScheduleFormPage