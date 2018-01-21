import rootNavigationReducer from '../reducer'
import appState from '../../../initialState'

describe('root navigation reducer', () => {
    it('should return the initial state', () => {
        expect(
            rootNavigationReducer(appState.navigation.root, {
                type: 'TEST',
            }),
        ).toEqual(appState.navigation.root)
    })
})
