import { createSelector, Selector } from 'reselect'
import { AppState } from '../types'
import { SettingsState, PushSettings } from './types'

export const selectSettings: Selector<AppState, SettingsState> = state =>
    state.settings

export const selectTheme: Selector<AppState, string> = state =>
    selectSettings(state).theme

export const selectPushSettings: Selector<AppState, PushSettings> = state =>
    selectSettings(state).push
