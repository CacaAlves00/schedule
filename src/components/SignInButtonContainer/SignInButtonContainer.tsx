import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { ThemeStateInterface } from '../../redux/theme'
import './SignInButtonContainer.scss'

interface SignInButtonContainerPropsInterface {
    handleSignIn: Function,
}

function SignInButtonContainer({ handleSignIn }: SignInButtonContainerPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)
    const backgroundColor = useSelector((state: ThemeStateInterface) => state.theme.backgroundColor)

    return (
        <div id='sign-in-button-container'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <Button variant='success'
                    onClick={() => handleSignIn()}
                    style={{
                        backgroundColor: secondaryColor,
                        borderColor: 'transparent'
                    }}
                >
                    Sign In
                </Button>
            </motion.div>
        </div>
    )
}

export default SignInButtonContainer