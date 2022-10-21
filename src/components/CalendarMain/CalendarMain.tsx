import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import CalendarDate from './CalendarDate/CalendarDate'
import './CalendarMain.scss'

interface CalendarMainPropsInterface {
    date: Date
}

function CalendarMain({ date }: CalendarMainPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

    const [firstDateOfTable, setFirstDateOfTable] = useState<Date>(date)

    useEffect(() => {
        function getFirstDateOfTable() {
            const firstDateOfTable = 
                new Date(date.getFullYear(), date.getMonth(), 1)

            while (firstDateOfTable.getUTCDay() != 0) {
                firstDateOfTable.setDate(firstDateOfTable.getDate() - 1)
            }

            return firstDateOfTable
        }

        setFirstDateOfTable(getFirstDateOfTable())
    }, [date])


    function getNextNDays(date: Date, n: number): Date {
        const nextNDays = new Date(date.getTime())
        nextNDays.setDate(nextNDays.getDate() + n)

        return nextNDays
    }

    function generateCalendarDatesArray(): number[] {
        return Array.from({ length: 42 }, (_, i) => i)
    }

    return (
        <main id="calendar-main">
            <section id="calendar-week-days">
                <span className="calendar-week-day">Sun</span>
                <span className="calendar-week-day">Mon</span>
                <span className="calendar-week-day">Tue</span>
                <span className="calendar-week-day">Wed</span>
                <span className="calendar-week-day">Thu</span>
                <span className="calendar-week-day">Fri</span>
                <span className="calendar-week-day">Sat</span>
            </section>

            <section id="calendar-dates">

                {
                    generateCalendarDatesArray().map(day => (
                        <CalendarDate 
                            key={`calendar-date-${day}`}
                            date={(getNextNDays(firstDateOfTable, day))} />
                    ))
                }
            </section>
        </main>
    )
}

export default CalendarMain