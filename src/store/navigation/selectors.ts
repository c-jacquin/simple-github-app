import { createSelector, Selector } from 'reselect'
import { AppState } from '../types'
import { FullNavigationState } from './types'

export const selectNavigation: Selector<AppState, FullNavigationState> = (
    state: AppState,
) => state.navigation
