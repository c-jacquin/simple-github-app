import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'

import { dependencies } from '../../epicDependencies'
import { AppState, ReduxAction, EpicDependancies } from '../../types'
import * as settingsAction from '../actions'
import settingsEpic from '../epic'

describe('settings epic', () => {
    const epicMiddleware = createEpicMiddleware<
        ReduxAction,
        AppState,
        EpicDependancies
    >(settingsEpic, { dependencies })
    const mockStore = configureMockStore([epicMiddleware])

    let store = mockStore()

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        epicMiddleware.replaceEpic(settingsEpic)
    })

    it('should be ok', () => {
        expect(true).toBeTruthy()
    })
})
