import React, { useEffect, useLayoutEffect, useState } from 'react'
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setThemeToDark, setThemeToDefault, setThemeToLight, ThemeStateInterface } from '../../../../redux/theme';
import './ThemeButtons.scss'

function ThemeButtons() {

    const [radioValue, setRadioValue] = useState<String>('1');
    const primaryColor = useSelector((state: ThemeStateInterface) => state.theme.primaryColor)
    const secondaryColor = useSelector((state: ThemeStateInterface) => state.theme.secondaryColor)
    const theme = useSelector((state: ThemeStateInterface) => state.theme.theme)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        switch (theme) {
            case 'default':
                setRadioValue('1')
                break
            case 'dark':
                setRadioValue('2')
                break
            case 'light':
                setRadioValue('3')
                break
        }
    }, [])

    useEffect(() => {
        switch (radioValue) {
            case '1':
                dispatch(setThemeToDefault())
                break;
            case '2':
                dispatch(setThemeToDark())
                break;
            case '3':
                dispatch(setThemeToLight())
                break;
            default:
        }
    }, [radioValue])

    const radios = [
        { name: 'Default', value: '1' },
        { name: 'Dark', value: '2' },
        { name: 'Light', value: '3' },
    ];

    return (
        <>
            <ButtonGroup>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={`theme-${idx}`}
                        id={`radio-${idx}`}
                        type="radio"
                        variant='outline-secondary'
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                        style={{
                            color: primaryColor,
                            backgroundColor:
                                (radioValue === radio.value) ? secondaryColor : ''
                        }}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}

export default ThemeButtons