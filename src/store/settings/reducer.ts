import { Reducer } from 'redux'

import * as settingsActions from './actions'
import { SettingsState } from './types'
import config from 'config'

export const initialState: SettingsState = {
    theme: config.DEFAULT_THEME,
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
        default:
            return state
    }
}

export default settingsReducer
