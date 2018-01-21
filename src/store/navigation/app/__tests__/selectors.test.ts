import { selectAppNavigation } from '../selectors'
import appState from '../../../initialState'

describe('navigation selectors', () => {
    it('should return the navigation state', () => {
        expect(selectAppNavigation(appState)).toBe(appState.navigation.app)
    })
})
