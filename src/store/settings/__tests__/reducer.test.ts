import settingsReducer from '../reducer'
import * as settingsActions from '../actions'
import appState from '../../initialState'

describe('settings reducer', () => {
    it('should return the initial state', () => {
        expect(
            settingsReducer(appState.settings, {
                type: 'TEST',
            }),
        ).toEqual(appState.settings)
    })
})
