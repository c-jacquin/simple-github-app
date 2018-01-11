import * as authActions from '../actions'

describe('auth actions', () => {
    it('should create an action to get the auth', () => {
        const expectedAction = {
            type: authActions.GET_AUTH_PENDING,
        }
        expect(authActions.getAuth()).toEqual(expectedAction)
    })

    it('should create an action when getting the auth work fine', () => {
        const expectedAction = {
            type: authActions.GET_AUTH_SUCCESS,
            payload: 'test',
        }

        expect(authActions.getAuthSuccess('test')).toEqual(expectedAction)
    })

    it('should create an action when getting the auth failed', () => {
        const expectedAction = {
            type: authActions.GET_AUTH_FAILED,
            error: 'test',
        }

        expect(authActions.getAuthFailed('test')).toEqual(expectedAction)
    })
})
