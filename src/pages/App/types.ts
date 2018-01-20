import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'

export interface AppConnectedProps {
    token?: string | undefined
    isPushRegister?: boolean
    user?: {}
}

export interface AppProps extends AppConnectedProps, AppActionCreators {}

export interface AppActionCreators {
    goTo?: ActionCreator<ReduxAction>
    auth?: ActionCreator<ReduxAction>
    registerPush?: ActionCreator<ReduxAction>
}
