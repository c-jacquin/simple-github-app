import appNavigationReducer, { initialState } from '../reducer'

describe('app navigation reducer', () => {
    it('should return the initial state', () => {
        expect(
            appNavigationReducer(initialState, {
                type: 'TEST',
            }),
        ).toEqual(initialState)
    })
})
