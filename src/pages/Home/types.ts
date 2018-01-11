import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'

export interface HomeConnectedProps {
    token: string | undefined
}

export interface HomeProps extends HomeConnectedProps, HomeActionCreators {}

export interface HomeActionCreators {
    goTo: ActionCreator<ReduxAction>
    auth: ActionCreator<ReduxAction>
}

export interface HomeState {}
