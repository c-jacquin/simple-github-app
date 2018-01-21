import { AppState } from './types'
import { initialState as languageState } from './language/reducer'
import { initialState as navigationState } from './navigation/reducer'
import { initialState as pushNotificationState } from './pushNotification/reducer'
import { initialState as bootState } from './boot/reducer'
import { initialState as authState } from './auth/reducer'
import { initialState as settingsState } from './settings/reducer'
// Import state here

const initialState: AppState = {
    apollo: {},
    language: languageState,
    navigation: navigationState,
    pushNotification: pushNotificationState,
    boot: bootState,
    auth: authState,
    settings: settingsState,
    // Insert state here
}

export default initialState
