import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginStateInterface } from '../redux/login'

function useHandleNotLoggedIn() {

    const loggedIn = useSelector((state: LoginStateInterface) => state.login.loggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loggedIn)
            navigate('/login')
    }, [])

    return (
    <div>useHandleNotLoggedIn</div>
  )
}

export default useHandleNotLoggedIn