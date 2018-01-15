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
// Import reducer here

const rootReducer = combineReducers<AppState>({
    apollo: apolloReducer,
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
            blacklist: ['register'],
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
    // Insert reducer here
})

export default rootReducer
