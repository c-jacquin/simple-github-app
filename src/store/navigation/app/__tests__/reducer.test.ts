import appNavigationReducer from '../reducer'
import appState from '../../../initialState'

describe('app navigation reducer', () => {
    it('should return the initial state', () => {
        expect(
            appNavigationReducer(appState.navigation.app, {
                type: 'TEST',
            }),
        ).toEqual(appState.navigation.app)
    })
})
