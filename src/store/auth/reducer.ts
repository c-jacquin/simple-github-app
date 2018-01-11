import { Reducer } from 'redux'

import * as authActions from './actions'
import { AuthState } from './types'

export const initialState: AuthState = {
    pending: false,
    isLoggedIn: false,
}

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
    switch (action.type) {
        case authActions.AUTH_PENDING:
            return {
                ...state,
                pending: true,
            }
        case authActions.AUTH_SUCCESS:
            return {
                pending: false,
                isLoggedIn: true,
                token: action.payload,
            }
        case authActions.AUTH_FAILED:
            return {
                ...state,
                pending: false,
            }
        default:
            return state
    }
}

export default authReducer
