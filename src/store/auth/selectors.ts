import { Selector } from 'reselect'
import { AppState } from '../types'
import { AuthState } from './types'

export const selectAuth: Selector<AppState, AuthState> = (state: AppState) => {
    return state.auth
}

export const selectToken: Selector<AppState, string | undefined> = state =>
    selectAuth(state).token

export const isLoggedIn: Selector<AppState, boolean> = state => {
    return !!selectToken(state)
}
