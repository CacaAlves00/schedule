import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'
import './LoginInputGroup.scss'

interface LoginInputGroupPropsInterface {
    email: string,
    setEmail: Function,
    password: string,
    setPassword: Function
}

function LoginInputGroup({email, setEmail, password, setPassword}: LoginInputGroupPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)
    const backgroundColor = useSelector((state: ThemeStateInterface) => state.theme.backgroundColor)

    return (
        <div>
            <InputGroup className='mb-3'>
                <InputGroup.Text
                    className='inputGroup-sizing-default'
                    style={{
                        color: primaryColor,
                        backgroundColor,
                        borderColor: primaryColor
                    }}
                >
                    E-mail
                </InputGroup.Text>
                <Form.Control
                    aria-label='Default'
                    aria-describedby='inputGroup-sizing-default'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
        </div>
    )
}

export default LoginInputGroup