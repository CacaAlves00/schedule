import React, { useEffect, useState } from 'react'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Header.scss'
import Offcanvas from './HeaderOffcanvas/HeaderOffcanvas'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'

function Header() {

    const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false)
    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

    return (
        <header id="header">
            <nav>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to='/home' style={{ textDecoration: 'none',  }}>
                        <AiOutlineHome size={'2rem'} className="icon" fill={primaryColor} />
                    </Link>
                </motion.div>

                <div>
                    <h1>schedule</h1>
                </div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    <AiOutlineMenu
                        size={'2rem'}
                        className="icon"
                        onClick={() => setShowOffcanvas(true)}
                        fill={primaryColor}
                    />
                </motion.div>

            </nav>

            <Offcanvas isShowing={showOffcanvas} hide={() => setShowOffcanvas(false)}/>
        </header >
    )
}

export default Header