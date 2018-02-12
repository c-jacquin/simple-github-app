import { ActionCreator } from 'redux'
import { ReduxAction, ErrorReduxAction } from '../types'

export const SET_THEME = 'SET_THEME'
export const UPDATE_PUSH_SETTINGS_PENDING = 'UPDATE_PUSH_SETTINGS_PENDING'
export const UPDATE_PUSH_SETTINGS_SUCCESS = 'UPDATE_PUSH_SETTINGS_SUCCESS'
export const UPDATE_PUSH_SETTINGS_FAILED = 'UPDATE_PUSH_SETTINGS_FAILED'

export const setTheme: ActionCreator<ReduxAction> = payload => ({
    type: SET_THEME,
    payload,
})

export const updatePushSettings: ActionCreator<ReduxAction> = payload => ({
    type: UPDATE_PUSH_SETTINGS_PENDING,
    payload,
})

export const updatePushSettingsSuccess: ActionCreator<
    ReduxAction
> = payload => ({
    type: UPDATE_PUSH_SETTINGS_SUCCESS,
    payload,
})

export const updatePushSettingsFailed: ActionCreator<
    ErrorReduxAction
> = error => ({
    type: UPDATE_PUSH_SETTINGS_FAILED,
    error,
})
