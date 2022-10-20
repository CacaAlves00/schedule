import React, { useEffect, useState } from 'react'
import { InputGroup, Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login as loginApi, signIn as signInApi } from '../../api/login'
import LogginButtonContainer from '../../components/LogginButtonContainer/LogginButtonContainer'
import LoginInputGroup from '../../components/LoginInputGroup/LoginInputGroup'
import { ThemeStateInterface } from '../../redux/theme'
import { login, LoginStateInterface } from '../../redux/login'
import './Login.scss'

const buttonStyles = {
    width: '13vw',
    margin: '0',
}

function Login() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [errorMsg, setErrorMsg] = useState<string>('')

    const isLoggedIn = useSelector((state: LoginStateInterface) => state.login.loggedIn)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn)
            navigate('/home')
    }, [])

    function handleSignIn() {
        const apiAnswer = signInApi(email, password)
        if (apiAnswer.successful)
            performLogin()
        else
            setErrorMsg(apiAnswer.message ?? '')
    }

    function handleLogin() {
        const apiAnswer = loginApi(email, password)
        if (apiAnswer.successful)
            performLogin()
        else
            setErrorMsg(apiAnswer.message ?? '')
    }

    function performLogin() {
        dispatch(login(email))
        navigate('/home')
    }

    return (
        <article id='form'>

            {
                errorMsg.length > 0 && (
                    <Alert variant='danger'>
                        {errorMsg}
                    </Alert>
                )
            }

            <LoginInputGroup
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />

            <LogginButtonContainer handleLogin={handleLogin}
                handleSignIn={handleSignIn} />

        </article>
    )
}

export default Login