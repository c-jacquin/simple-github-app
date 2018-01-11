import { selectAuth } from '../selectors'
import appState from '../../initialState'

describe('auth selectors', () => {
    it('should return the auth state', () => {
        expect(selectAuth(appState)).toBe(appState.auth)
    })
})
