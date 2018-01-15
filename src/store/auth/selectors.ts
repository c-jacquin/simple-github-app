import { createSelector, Selector } from 'reselect'
import { AppState } from '../types'
import { AuthState } from './types'

export const selectAuth: Selector<AppState, AuthState> = (state: AppState) => {
    return state.auth
}

export const selectToken: Selector<
    AppState,
    string | undefined
> = createSelector([selectAuth], auth => auth.token)

export const isLoggedIn: Selector<AppState, boolean> = createSelector(
    [selectAuth],
    auth => auth.isLoggedIn,
)
