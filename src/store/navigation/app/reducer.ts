import { Reducer } from 'redux'
import Navigator from 'pages/App/App.nav'
import { NavigationState } from '../types'

export const initialState: NavigationState = Navigator.router.getStateForAction(
    Navigator.router.getActionForPathAndParams('Settings'),
    null,
)

const appNavigationReducer: Reducer<NavigationState> = (
    state = initialState,
    action,
) => {
    return Navigator.router.getStateForAction(action, state)
}

export default appNavigationReducer
