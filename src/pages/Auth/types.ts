import { ActionCreator } from 'react-redux'
import { ReduxAction } from 'store/types'

export interface AuthConnectedProps {}

export interface AuthProps extends AuthConnectedProps, AuthActionCreators {}

export interface AuthActionCreators {
    login: ActionCreator<ReduxAction>
}

export interface AuthState {}
