import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { addScheduleItem } from '../../api/schedule'
import DatePicker from 'react-datepicker'
import { ThemeStateInterface } from '../../redux/theme'
import './CalendarForm.scss'
import { useNavigate } from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css"

function CalendarForm() {

  const [name, setName] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [startDate, setStartDate] = useState<Date>(new Date())

  const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)

  const navigate = useNavigate()

  function handleSubmit() {

    // const weekDayToNumber = weekDays.indexOf(day ?? '') + 1

    // addScheduleItem({
    //   _id: 'asd',
    //   name: name ?? '',
    //   description: description ?? '',
    //   weekDay: weekDayToNumber
    // })

    navigate('/calendar')
  }

  return (
    <Form id="calendar-form" onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3" controlId="event">
        <Form.Label>Event</Form.Label>
        <Form.Control type="text" placeholder="Name of the event"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
      </Form.Group>

      <DatePicker className="mb-4" selected={startDate} onChange={(date: Date) => setStartDate(date)} />

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          maxLength={200}
          rows={2}
          placeholder="Description of the event..."
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit"
        style={{ backgroundColor: secondaryColor }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  )
}

export default CalendarForm