import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import './YearDisplay.scss'

interface DatePropsInterface {
  date: Date,
  setDate: Function
}

function YearDisplay({ date, setDate }: DatePropsInterface) {

  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

  function getDateFormated(): string {
    return date.toLocaleString('en-us', { year: 'numeric' })
  }

  function increaseOneYear() {
    const newDate: Date = new Date(date.getFullYear() + 1, date.getMonth(), 1)
    setDate(newDate)
  }

  function decreaseOneYear() {
    const newDate: Date = new Date(date.getFullYear() - 1, date.getMonth(), 1)
    setDate(newDate)
  }

  return (
    <div id="year-display" style={{ borderColor: primaryColor }}>
      <MdKeyboardArrowLeft
        className="icon"
        fill={primaryColor}
        size={32}
        onClick={decreaseOneYear}
      />

      <div id="display">
        {getDateFormated()}
      </div>

      <MdKeyboardArrowRight
        className="icon"
        fill={primaryColor}
        size={32}
        onClick={increaseOneYear}
      />
    </div>
  )

}

export default YearDisplay