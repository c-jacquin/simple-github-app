import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { apolloReducer } from 'apollo-cache-redux'

import { AppState } from './types'
import languageReducer from './language/reducer'
import navigationReducer from './navigation/reducer'
import pushNotificationReducer from './pushNotification/reducer'
import bootReducer from './boot/reducer'
import authReducer from './auth/reducer'
import settingsReducer from './settings/reducer'
// Import reducer here

const rootReducer = combineReducers<AppState>({
    apollo: persistReducer(
        {
            key: 'apollo',
            storage,
        },
        apolloReducer,
    ),
    language: persistReducer(
        {
            key: 'language',
            blacklist: ['pending'],
            storage,
        },
        languageReducer,
    ),
    navigation: navigationReducer,
    pushNotification: persistReducer(
        {
            key: 'pushNotifications',
            blacklist: ['data'],
            storage,
        },
        pushNotificationReducer,
    ),
    boot: bootReducer,
    auth: persistReducer(
        {
            key: 'auth',
            blacklist: ['pending', 'isLoggedIn'],
            storage,
        },
        authReducer,
    ),
    settings: persistReducer(
        {
            key: 'settings',
            storage,
        },
        settingsReducer,
    ),
    // Insert reducer here
})

export default rootReducer
