import { combineReducers } from 'redux'

import rootNavigationReducer, {
    initialState as rootInitialState,
} from './root/reducer'
import appNavigationReducer, {
    initialState as appInitialState,
} from './app/reducer'

import { FullNavigationState } from './types'

export const initialState = {
    root: rootInitialState,
    app: appInitialState,
}

const navigationReducer = combineReducers<FullNavigationState>({
    root: rootNavigationReducer,
    app: appNavigationReducer,
})

export default navigationReducer
