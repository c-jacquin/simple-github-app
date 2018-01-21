import { Action } from 'redux'
import { Observable } from 'rxjs/Observable'
import { Epic } from 'redux-observable'
import { LanguageState, LanguageApi } from 'store/language'
import { FullNavigationState } from 'store/navigation'
import {
    PushNotificationState,
    PushNotificationApi,
} from 'store/pushNotification'
import { BootState, BootApi } from 'store/boot'
import { AuthState, AuthApi } from 'store/auth'
import { SettingsState, SettingsApi } from 'store/settings'
// Import types here

export interface ReduxAction extends Action {
    payload?: any
    meta?: any
}

export interface ErrorReduxAction extends Action {
    error: Error
    meta?: any
}

export interface AppState {
    apollo: {
        [key: string]: any
    }
    language: LanguageState
    navigation: FullNavigationState
    pushNotification: PushNotificationState
    boot: BootState
    auth: AuthState
    settings: SettingsState
    // Insert types here
}

export interface EpicDependancies {
    languageApi: LanguageApi
    pushNotificationApi: PushNotificationApi
    bootApi: BootApi
    authApi: AuthApi
    settingsApi: SettingsApi
    // Insert api here
}

export type MyEpic = Epic<
    ReduxAction | ErrorReduxAction,
    AppState,
    EpicDependancies
>
