import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import './MealDisplay.scss'

interface MealDisplayPropsInterface {
  meals: string[],
  mealIdx: number,
  setMealIdx: Function
}

function MealDisplay({ meals, mealIdx, setMealIdx }: MealDisplayPropsInterface) {

  const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

  function getNextMeal() {
    setMealIdx((state: number) => {
      const nextIdx = state + 1
      const isItOverboundingMeals = nextIdx >= meals.length 
      
      return isItOverboundingMeals ? state : state + 1
    })
  }

  function getPreviousMeal() {
    setMealIdx((state: number) => {
      const previousIdx = state - 1
      const isItOverboundingMeals = previousIdx < 0
      
      return isItOverboundingMeals ? state : state - 1
    })
  }

  return (
    <div id="meal-display" style={{ borderColor: primaryColor }}>
      <MdKeyboardArrowLeft
        className="icon"
        fill={primaryColor}
        size={32}
        onClick={getPreviousMeal}
      />

      <div id="display">
        {meals[mealIdx]}
      </div>

      <MdKeyboardArrowRight
        className="icon"
        fill={primaryColor}
        size={32}
        onClick={getNextMeal}
      />
    </div>
  )

}

export default MealDisplay