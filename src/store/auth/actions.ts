import { ActionCreator } from 'redux'
import { ErrorReduxAction, ReduxAction } from '../types'

export const AUTH_PENDING = 'AUTH_PENDING'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILED = 'AUTH_FAILED'

export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export const auth: ActionCreator<ReduxAction> = () => ({
    type: AUTH_PENDING,
})

export const authSuccess: ActionCreator<ReduxAction> = payload => ({
    type: AUTH_SUCCESS,
    payload,
})

export const authFailed: ActionCreator<ErrorReduxAction> = error => ({
    type: AUTH_FAILED,
    error,
})

export const logout = () => ({
    type: LOGOUT,
})

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
})
