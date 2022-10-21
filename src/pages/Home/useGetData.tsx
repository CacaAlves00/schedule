import React from 'react'
import { CiAlarmOn, CiCalendar } from 'react-icons/ci'

import { useSelector } from 'react-redux'
import { ThemeStateInterface } from '../../redux/theme'

interface DataInterface {
    title: string,
    children: JSX.Element
}

function useGetData() {

    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)

    const data: DataInterface[] = [
        {
            title: 'schedule',
            children: <CiAlarmOn size={34} fill={primaryColor} />
        },
        {
            title: 'calendar',
            children: <CiCalendar size={34} fill={primaryColor}  />
        },
    
    ]

    return data
}

export default useGetData