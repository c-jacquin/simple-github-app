import { createSelector, Selector } from 'reselect'
import { AppState } from '../../types'
import { NavigationState, selectNavigation } from '../index'

export const selectAppNavigation: Selector<AppState, NavigationState> = (
    state: AppState,
) => selectNavigation(state).app
