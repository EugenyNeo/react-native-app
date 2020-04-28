import React, {useReducer} from 'react'
import {ScreenContect} from './screenContext'
import {ScreenReducer} from '/creeenReducer'

export const ScreenState = ({}) =>{
    const [state, dispatch] = useReducer(screeRedcuer, null)

    const changeScreen = id => dispatch({type:CHANGE_SCREEN, payload:id})
    return <ScreenContect.Provider value={{
        changeScreen,
        todoId: state
    }}>{children}
    </ScreenContect.Provider>
}