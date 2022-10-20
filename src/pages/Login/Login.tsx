import React, { useEffect, useState } from 'react'
import { InputGroup, Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login as loginApi, signIn as signInApi } from '../../api/login'
import LogginButtonContainer from '../../components/LogginButtonContainer/LogginButtonContainer'
import LoginInputGroup from '../../components/LoginInputGroup/LoginInputGroup'
import { ThemeStateInterface } from '../../redux/theme'
import { login, LoginStateInterface } from '../../redux/login'
import { motion } from 'framer-motion'
import './Login.scss'

const buttonStyles = {
    width: '13vw',
    margin: '0',
}

function Login() {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorMsg, setErrorMsg] = useState<string>('')

    const isLoggedIn = useSelector((state: LoginStateInterface) => state.login.loggedIn)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn)
            navigate('/home')
    }, [])

    async function handleSignIn() {
        const apiAnswer = await signInApi(username, password)
        if (apiAnswer.successful)
            performLogin()
        else
            setErrorMsg(apiAnswer.message ?? '')
    }

    async function handleLogin() {
        const apiAnswer = await loginApi(username, password)
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

                <LoginInputGroup
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />

                <LogginButtonContainer handleLogin={handleLogin}
                    handleSignIn={handleSignIn} />

            </motion.div>
        </article>
    )
}

export default Login