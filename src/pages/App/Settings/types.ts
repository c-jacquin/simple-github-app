import { InjectedIntlProps } from 'react-intl'
import { ActionCreator } from 'react-redux'
import { ReduxAction } from 'store/types'
import { PushSettings } from '../../../store/settings/types'

export interface SettingsConnectedProps {
    theme: string
    locale: string
    pushSettings: PushSettings
}

export interface SettingsProps
    extends SettingsConnectedProps,
        SettingsActionCreators,
        InjectedIntlProps {}

export interface SettingsActionCreators {
    setTheme: ActionCreator<ReduxAction>
    setLocale: ActionCreator<ReduxAction>
    updatePushSettings: ActionCreator<ReduxAction>
}

export interface SettingsState {
    pushChanged: boolean
    pushSettings: PushSettings
}
