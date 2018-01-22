import rootNavigationReducer, { initialState } from '../reducer'
import appState from '../../../initialState'

describe('root navigation reducer', () => {
    it('should return the initial state', () => {
        expect(
            rootNavigationReducer(initialState, {
                type: 'TEST',
            }),
        ).toEqual(initialState)
    })
})
