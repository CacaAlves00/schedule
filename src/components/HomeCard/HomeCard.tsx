import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import { motion } from 'framer-motion'
import './HomeCard.scss'

interface HomeCardPropsInterface {
    title: string,
    children: JSX.Element
}

function HomeCard({ title, children }: HomeCardPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

    return (
        <motion.div
        initial={{ 
            x: "-10",
            scale: 0.8,
            opacity: 0.4 
        }}
        animate={{
            x: "0",
            scale: 1,
            opacity: 1
        }}
        transition={{
            duration: 0.5
        }}
        whileHover={{
            scale: 1.1
        }}
        >
            <div className="home-card"
                style={{ color: primaryColor, borderColor: primaryColor }}>
                <h2>
                    {title}
                </h2>

                {children}
            </div>
        </motion.div>
    )
}

export default HomeCard