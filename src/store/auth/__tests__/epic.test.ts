import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import { dependencies } from '../../epicDependencies'
import { AppState, ReduxAction, EpicDependancies } from '../../types'
import * as authAction from '../actions'
import { authEpic } from '../epic'

describe('auth epic', () => {
    const epicMiddleware = createEpicMiddleware<
        ReduxAction,
        AppState,
        EpicDependancies
    >(authEpic, { dependencies })
    const mockStore = configureMockStore([epicMiddleware])

    let store = mockStore()

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        epicMiddleware.replaceEpic(authEpic)
    })

    it('should be ok', () => {
        expect(true).toBeTruthy()
    })
})
