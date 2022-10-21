import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { deleteScheduleItem, ScheduleObjectInterface } from '../../../api/schedule'
import { ThemeStateInterface } from '../../../redux/theme'
import './ScheduleTableItem.scss'

interface ScheduleTableItemProps {
    name: string,
    description: string,
    _id?: string,
    onDelete: Function
}

function ScheduleTableItem({ name, description, _id, onDelete }: ScheduleTableItemProps): JSX.Element {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const navigate = useNavigate()

    async function handleDelete() {
        await deleteScheduleItem(_id)
        onDelete()
    }

    return (
        <tr key={`schedule-item-${_id}`}>

            <td>{name}</td>
            <td>{description}</td>
            <td>
                <Button
                    variant='outline-danger'
                    onClick={handleDelete}
                    style={{ color: primaryColor, borderColor: primaryColor }}
                >
                    Delete
                </Button>
            </td>
        </tr >
    )
}

export default ScheduleTableItem