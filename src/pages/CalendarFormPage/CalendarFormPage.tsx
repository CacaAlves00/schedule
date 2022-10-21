import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CalendarForm from '../../components/CalendarForm /CalendarForm'
import useHandleNotLoggedIn from '../../hooks/useHandleNotLoggedIn'
import { ThemeStateInterface } from '../../redux/theme'
import './CalendarFormPage.scss'

function CalendarFormPage() {


    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)

    const navigate = useNavigate()

    useHandleNotLoggedIn()

    return (
        <article id="calendar-form-page"
            style={{
                border: '2px solid',
                borderColor: `${primaryColor}`
            }}
        >
            <CalendarForm />
        </article>
    )
}

export default CalendarFormPage