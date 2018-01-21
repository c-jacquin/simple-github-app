import { createSelector, Selector } from 'reselect'
import { AppState } from '../types'
import { SettingsState } from './types'

export const selectSettings: Selector<AppState, SettingsState> = (
    state: AppState,
) => state.settings

export const selectTheme: Selector<AppState, string> = (state: AppState) =>
    selectSettings(state).theme
