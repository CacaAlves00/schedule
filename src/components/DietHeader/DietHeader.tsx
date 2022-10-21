import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './DietHeader.scss'
import { AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import DateDisplay from '../DateDisplay/DateDisplay'
import MealDisplay from '../MealDisplay/MealDisplay'

function DietHeader() {

    const [date, setDate] = useState<Date>(new Date())
    const [mealIdx, setMealIdx] = useState<number>(0)

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

    const navigate = useNavigate()

    const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'] 

    function openForm() {
        navigate('/diet-form')
    }

    return (
        <header id="diet-header">
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
            >
                <AiOutlinePlus
                    className="icon"
                    size={48}
                    fill={primaryColor}
                    onClick={openForm}
                />
            </motion.div>

            <div id="date-container">

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                >
                    <MealDisplay 
                        meals={meals} 
                        mealIdx={mealIdx} 
                        setMealIdx={setMealIdx}
                    />
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                >
                    <DateDisplay date={date} setDate={setDate} />
                </motion.div>
            </div>
        </header>
    )
}

export default DietHeader