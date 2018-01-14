import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'

export interface AppConnectedProps {
    token?: string | undefined
}

export interface AppProps extends AppConnectedProps, AppActionCreators {}

export interface AppActionCreators {
    goTo?: ActionCreator<ReduxAction>
}
