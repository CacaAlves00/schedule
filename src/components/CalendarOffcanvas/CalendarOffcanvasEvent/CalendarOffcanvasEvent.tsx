import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteCalendarItem } from '../../../api/calendar'
import { ThemeStateInterface } from '../../../redux/theme'
import './CalendarOffcanvasEvent.scss'

interface CalendarOffcanvasEventPropsInterface {
    event: string,
    description: string,
    _id?: string

}

function CalendarOffcanvasEvent({ event, description, _id }: CalendarOffcanvasEventPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)
    const backgroundColor = useSelector((state: ThemeStateInterface) => state.theme.backgroundColor)

    const navigate = useNavigate()

    function handleButtonClick() {
        deleteCalendarItem(_id)
        navigate('/calendar')
    }

    return (
        <article id="calendar-offcanvas-event">
            <Card style={{
                color: primaryColor,
                backgroundColor,
                borderColor: primaryColor,
            }}>
                <Card.Header
                    style={{borderColor: primaryColor}}
                >
                    Event
                </Card.Header>
                <Card.Body>
                    <Card.Title>{event}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="danger" onClick={handleButtonClick}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>
        </article>
    )
}

export default CalendarOffcanvasEvent