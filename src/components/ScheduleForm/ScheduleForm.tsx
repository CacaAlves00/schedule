import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addScheduleItem } from '../../api/schedule'
import { ThemeStateInterface } from '../../redux/theme'
import './ScheduleForm.scss'
import weekDays from './weekDays'

function ScheduleForm() {

  const [name, setName] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [day, setDay] = useState<string>('Sunday')

  const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)

  const navigate = useNavigate()

  function handleSubmit() {

    const weekDayToNumber = weekDays.indexOf(day ?? '') + 1

    addScheduleItem({
      name: name ?? '',
      description: description ?? '',
      weekDay: weekDayToNumber
    })

    navigate('/schedule')
  }

  return (
    <Form id="schedule-form" onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name of the task"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="day">
        <Form.Label>Day</Form.Label>
        <Form.Select
          defaultValue="Choose..."
          value={day}
          onChange={(e: any) => setDay(e.target.value)}
        >
          {weekDays.map((day) => (
            <option key={day}>{day}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          maxLength={200}
          rows={2}
          placeholder="Description of the task..."
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

export default ScheduleForm