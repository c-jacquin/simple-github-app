import authReducer from '../reducer'
import * as authActions from '../actions'
import appState from '../../initialState'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(
            authReducer(appState.auth, {
                type: 'TEST',
            })
        ).toEqual(appState.auth)
    })
})
