import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { fetchSchedule, ScheduleObjectInterface } from '../../api/schedule'
import { ThemeStateInterface } from '../../redux/theme'
import './ScheduleTable.scss'
import ScheduleTableItem from './ScheduleTableItem/ScheduleTableItem'

interface ScheduleTablePropsInterface {
    date: Date
}

function ScheduleTable({ date }: ScheduleTablePropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

    const [data, setData] = useState<ScheduleObjectInterface[]>()

    useEffect(() => {
        fetchData()
    }, [date])

    function onDeleteItem() {
        fetchData()
    }

    function fetchData() {
        fetchSchedule(date)
            .then((schedule) => setData([...schedule.payload]))
            .catch((error) => console.log(error))
    }

    return (
        <Table id="schedule-table" hover bordered style={{ color: primaryColor }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item) => (
                        <ScheduleTableItem {...item} onDelete={onDeleteItem} />
                    ))
                }
            </tbody>
        </Table>
    )
}

export default ScheduleTable
