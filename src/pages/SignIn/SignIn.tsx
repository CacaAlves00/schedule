import React, { useEffect, useState } from 'react'
import { InputGroup, Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login as loginApi, signIn as signInApi } from '../../api/login'
import SignInButtonContainer from '../../components/SignInButtonContainer/SignInButtonContainer'
import LoginInputGroup from '../../components/LoginInputGroup/LoginInputGroup'
import { ThemeStateInterface } from '../../redux/theme'
import { login, LoginStateInterface } from '../../redux/login'
import { motion } from 'framer-motion'
import './SignIn.scss'
import SignInInputGroup from '../../components/SignInInputGroup/SignInInputGroup'

const buttonStyles = {
    width: '13vw',
    margin: '0',
}

function SignIn() {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
    const [errorMsg, setErrorMsg] = useState<string>('')

    const isLoggedIn = useSelector((state: LoginStateInterface) => state.login.loggedIn)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn)
            navigate('/home')
    }, [])

    async function handleSignIn() {
        if (password !== passwordConfirmation) {
            setErrorMsg('The passwords don\'t match')
            return
        }

        const apiAnswer = await signInApi(username, password)
        if (apiAnswer.successful)
            performLogin()
        else
            setErrorMsg(apiAnswer.message ?? '')
    }

    function performLogin() {
        dispatch(login(username))
        navigate('/home')
    }

    return (
        <article id='form'>
            <motion.div
                initial={{
                    scale: 0.97,
                    opacity: 0.4
                }}
                animate={{
                    scale: 1,
                    opacity: 1
                }}
                transition={{
                    duration: 0.7
                }}
            >

                {
                    errorMsg.length > 0 && (
                        <Alert variant='danger'>
                            {errorMsg}
                        </Alert>
                    )
                }

                <SignInInputGroup
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    passwordConfirmation={passwordConfirmation}
                    setPasswordConfirmation={setPasswordConfirmation}
                />

                <SignInButtonContainer handleSignIn={handleSignIn} />

            </motion.div>
        </article>
    )
}

export default SignIn