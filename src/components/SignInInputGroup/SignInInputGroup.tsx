import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import './SignInInputGroup.scss'

interface SignInInputGroupPropsInterface {
    username: string,
    setUsername: Function,
    password: string,
    setPassword: Function,
    passwordConfirmation: string,
    setPasswordConfirmation: Function,
}

function SignInInputGroup({username, setUsername, password, setPassword,
    passwordConfirmation, setPasswordConfirmation}: SignInInputGroupPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)
    const backgroundColor = useSelector((state: ThemeStateInterface) => state.theme.backgroundColor)

    return (
        <div>
            <InputGroup className='mb-4'>
                <InputGroup.Text
                    className='inputGroup-sizing-default'
                    style={{
                        color: primaryColor,
                        backgroundColor,
                        borderColor: primaryColor
                    }}
                >
                    Username
                </InputGroup.Text>
                <Form.Control
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                        color: primaryColor,
                        backgroundColor,
                        borderColor: primaryColor
                    }}
                />
            </InputGroup>

            <InputGroup className='mb-2'>
                <InputGroup.Text
                    className='inputGroup-sizing-default'
                    style={{
                        color: primaryColor,
                        backgroundColor,
                        borderColor: primaryColor
                    }}
                >
                    Password
                </InputGroup.Text>
                <Form.Control
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                    value={password}
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        color: primaryColor,
                        backgroundColor,
                        borderColor: primaryColor
                    }}
                />
            </InputGroup>

            <InputGroup className='mb-3'>
                <InputGroup.Text
                    className='inputGroup-sizing-default'
                    style={{
                        color: primaryColor,
                        backgroundColor,
                        borderColor: primaryColor
                    }}
                >
                    Password
                </InputGroup.Text>
                <Form.Control
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                    value={passwordConfirmation}
                    type='password'
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    style={{
                        color: primaryColor,
                        backgroundColor,
                        borderColor: primaryColor
                    }}
                />
            </InputGroup>
        </div>
    )
}

export default SignInInputGroup