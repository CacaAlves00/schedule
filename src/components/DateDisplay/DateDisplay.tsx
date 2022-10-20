import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import './DateDisplay.scss'

interface DatePropsInterface {
    date: Date,
    setDate: Function
}

function Date({ date, setDate }: DatePropsInterface) {
  return (
    <div>
        <MdKeyboardArrowLeft />

        <div>

        </div>

        <MdKeyboardArrowRight />
    </div>
  )
}

export default Date