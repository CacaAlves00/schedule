import React, { useState } from 'react'
import { Button, Offcanvas, OffcanvasBody } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import './CalendarOffcanvas.scss'
import { useNavigate } from 'react-router-dom'
import { CalendarObjectInterface } from '../../api/calendar'
import CalendarOffcanvasEvent from './CalendarOffcanvasEvent/CalendarOffcanvasEvent'

interface CalendarOffcanvasPropsInterface {
    isShowing: boolean,
    hide: Function,
    events: CalendarObjectInterface[]
}

function CalendarOffcanvas({ isShowing, hide,
    events }: CalendarOffcanvasPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const backgroundColor = useSelector((state: ThemeStateInterface) => state.theme.backgroundColor)

    return (
        <Offcanvas
            show={isShowing}
            onHide={hide}
            placement='end'
            style={{
                color: primaryColor,
                backgroundColor: backgroundColor
            }}
        >

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Events</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="calendar-offcanvas-body">
                {
                    events.map((event) => (
                        <CalendarOffcanvasEvent {...event} />
                    ))
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default CalendarOffcanvas