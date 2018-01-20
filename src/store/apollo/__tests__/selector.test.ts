import { selectUser } from '../selectors'
import appState from '../../initialState'

describe('auth selectors', () => {
    it('should return the key of appolo state wich start with "User"', () => {
        const user = {
            id: 'test',
        }
        appState.apollo.User2342342 = user
        expect(selectUser(appState)).toBe(user)
    })
})
