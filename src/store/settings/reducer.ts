import { Reducer } from 'redux'

import * as settingsActions from './actions'
import { SettingsState } from './types'
import config from 'config'

export const initialState: SettingsState = {
    theme: config.DEFAULT_THEME,
    pending: false,
    push: {
        pushEnabled: true,
        pushCommit: true,
        pushIssue: true,
        pushPr: true,
    },
}

const settingsReducer: Reducer<SettingsState> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case settingsActions.SET_THEME:
            return {
                ...state,
                theme: action.payload,
            }
        case settingsActions.UPDATE_PUSH_SETTINGS_PENDING:
            return {
                ...state,
                pending: true,
            }
        case settingsActions.UPDATE_PUSH_SETTINGS_SUCCESS:
            return {
                ...state,
                pending: false,
                push: action.payload,
            }
        case settingsActions.UPDATE_PUSH_SETTINGS_FAILED:
            return {
                ...state,
                pending: false,
            }
        default:
            return state
    }
}

export default settingsReducer
