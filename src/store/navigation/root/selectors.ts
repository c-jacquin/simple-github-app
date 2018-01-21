import { createSelector, Selector } from 'reselect'
import { AppState } from '../../types'
import { NavigationState, selectNavigation } from '../index'

export const selectRootNavigation: Selector<AppState, NavigationState> = (
    state: AppState,
) => selectNavigation(state).root
