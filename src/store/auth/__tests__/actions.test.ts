import * as authActions from '../actions'

describe('auth actions', () => {
    it('should create an action to get the auth', () => {
        const expectedAction = {
            type: authActions.AUTH_PENDING,
        }
        expect(authActions.auth()).toEqual(expectedAction)
    })

    it('should create an action when getting the auth work fine', () => {
        const expectedAction = {
            type: authActions.AUTH_SUCCESS,
            payload: 'test',
        }

        expect(authActions.authSuccess('test')).toEqual(expectedAction)
    })

    it('should create an action when getting the auth failed', () => {
        const expectedAction = {
            type: authActions.AUTH_FAILED,
            error: 'test',
        }

        expect(authActions.authFailed('test')).toEqual(expectedAction)
    })
})
