import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import './DateDisplay.scss'

interface DateDisplayPropsInterface {
    date: Date,
    setDate: Function
}

function DateDisplay({ date, setDate }: DateDisplayPropsInterface) {
  
  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor )

  function getDateFormated(): string {
    return date.toLocaleDateString('en-us', {
      year: "numeric", month: "short", day: "numeric"
    })
  }
  
  function increaseOneDay() {
    const newDate: Date = new Date(date.getTime())
    newDate.setDate(date.getDate() + 1)
    setDate(newDate)
  }

  function decreaseOneDay() {
    const newDate: Date = new Date(date.getTime())
    newDate.setDate(date.getDate() - 1)
    setDate(newDate)
  }

  return (
    <div id="date-display" style={{borderColor: primaryColor}}>
        <MdKeyboardArrowLeft 
          className="icon" 
          fill={primaryColor} 
          size={32}
          onClick={decreaseOneDay}  
        />

        <div id="display">
          {getDateFormated() }
        </div>

        <MdKeyboardArrowRight
          className="icon" 
          fill={primaryColor} 
          size={32}
          onClick={increaseOneDay}  
        />
    </div>
  )

}

export default DateDisplay