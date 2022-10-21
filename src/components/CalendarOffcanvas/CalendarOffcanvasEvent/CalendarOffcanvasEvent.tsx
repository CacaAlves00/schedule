import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { deleteCalendarItem } from '../../../api/calendar'
import './CalendarOffcanvasEvent.scss'

interface CalendarOffcanvasEventPropsInterface {
    event: string,
    description: string,
    _id?: string

}

function CalendarOffcanvasEvent({ event, description, _id }: CalendarOffcanvasEventPropsInterface) {
    
    const navigate = useNavigate()

    function handleButtonClick() {
        deleteCalendarItem(_id)
        navigate('/calendar')
    }

    return (
        <article id="calendar-offcanvas-event">
            <Card>
                <Card.Header>Event</Card.Header>
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