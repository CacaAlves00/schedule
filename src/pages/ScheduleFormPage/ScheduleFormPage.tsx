import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
            <ScheduleForm onSubmit={onSubmit} />
        </article>
    )
}

export default ScheduleFormPage