import { selectRootNavigation } from '../selectors'
import appState from '../../../initialState'

describe('navigation selectors', () => {
    it('should return the navigation state', () => {
        expect(selectRootNavigation(appState)).toBe(appState.navigation.root)
    })
})
