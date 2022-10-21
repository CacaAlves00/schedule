import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import './MonthDisplay.scss'

interface DatePropsInterface {
    date: Date,
    setDate: Function
}

function MonthDisplay({ date, setDate }: DatePropsInterface) {
  
  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor )

  function getDateFormated(): string {
    return date.toLocaleString('en-us', { month: 'long' })
  }

  function increaseOneMonth() {
    const newDate: Date = new Date(date.getFullYear(), date.getMonth() + 1, 1)
    setDate(newDate)
  }

  function decreaseOneMonth() {
    const newDate: Date = new Date(date.getFullYear(), date.getMonth() - 1, 1)
    setDate(newDate)
  }

  return (
    <div id="month-display" style={{borderColor: primaryColor}}>
        <MdKeyboardArrowLeft 
          className="icon" 
          fill={primaryColor} 
          size={32}
          onClick={decreaseOneMonth}  
        />

        <div id="display">
          {getDateFormated()}
        </div>

        <MdKeyboardArrowRight
          className="icon" 
          fill={primaryColor} 
          size={32}
          onClick={increaseOneMonth}  
        />
    </div>
  )

}

export default MonthDisplay