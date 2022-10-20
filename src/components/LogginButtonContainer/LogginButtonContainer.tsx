import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { ThemeStateInterface } from '../../redux/theme'
import './LogginButtonContainer.scss'

interface LoginButtonContainerPropsInterface {
    handleLogin: Function,
    handleSignIn: Function,
}

function LogginButtonContainer(props: LoginButtonContainerPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)
    const backgroundColor = useSelector((state: ThemeStateInterface) => state.theme.backgroundColor)

    return (
        <div id='button-container'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >

                <Button
                    onClick={() => props.handleSignIn()}
                    style={{
                        color: primaryColor,
                        borderColor: primaryColor,
                        backgroundColor: 'transparent'
                    }}
                >
                    Sign In
                </Button>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <Button variant='success'
                    onClick={() => props.handleLogin()}
                    style={{
                        backgroundColor: secondaryColor,
                        borderColor: 'transparent'
                    }}
                >
                    Login
                </Button>
            </motion.div>
        </div>
    )
}

export default LogginButtonContainer