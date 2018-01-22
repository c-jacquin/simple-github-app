import { ActionCreator } from 'react-redux'
import { ReduxAction } from 'store/types'

export interface SettingsConnectedProps {
    theme: string
    locale: string
}

export interface SettingsProps
    extends SettingsConnectedProps,
        SettingsActionCreators {}

export interface SettingsActionCreators {
    changeTheme: ActionCreator<ReduxAction>
    changeLocale: ActionCreator<ReduxAction>
}
