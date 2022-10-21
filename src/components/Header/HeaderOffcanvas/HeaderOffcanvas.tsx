import React, { useState } from 'react'
import { Button, Offcanvas, OffcanvasBody } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../../redux/theme'
import ThemeButtons from './ThemeButtons/ThemeButtons'
import './HeaderOffcanvas.scss'
import { logout } from '../../../redux/login'
import { useNavigate } from 'react-router-dom'

interface OffcanvasPropsInterface {
    isShowing: boolean,
    hide: Function
}

function HeaderOffcanvas({ isShowing, hide }: OffcanvasPropsInterface) {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const backgroundColor = useSelector((state: ThemeStateInterface) => state.theme.backgroundColor)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogout() {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <Offcanvas
            show={isShowing}
            onHide={hide}
            placement='end'
            style={{
                color: primaryColor,
                backgroundColor: backgroundColor
            }}
        >

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Settings</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="header-offcanvas-body">
                <ThemeButtons />
                <Button 
                    variant="danger"
                    onClick={handleLogout}    
                >
                    Logout
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default HeaderOffcanvas