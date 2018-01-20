import { Selector } from 'reselect'
import { AppState } from 'store/types'

export const selectApollo: Selector<AppState, any> = state => state.apollo

export const selectUser: Selector<AppState, { login: string }> = state => {
    for (const key of Object.keys(selectApollo(state))) {
        if (key.startsWith('User')) {
            return state.apollo[key]
        }
    }
}
