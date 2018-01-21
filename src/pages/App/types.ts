import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'
import { NavigationState } from 'store/navigation'

export interface AppConnectedProps {
    token?: string | undefined
    isPushRegister?: boolean
    user?: {}
    nav?: NavigationState
}

export interface AppProps extends AppConnectedProps, AppActionCreators {}

export interface AppActionCreators {
    goTo?: ActionCreator<ReduxAction>
    auth?: ActionCreator<ReduxAction>
    registerPush?: ActionCreator<ReduxAction>
}
