import { ActionCreator } from 'redux'
import { ReduxAction } from '../types'

export const SET_THEME = 'SET_THEME'

export const setTheme: ActionCreator<ReduxAction> = payload => ({
    type: SET_THEME,
    payload,
})
