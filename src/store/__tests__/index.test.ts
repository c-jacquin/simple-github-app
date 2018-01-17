import { Store } from 'redux'
import configureStore from '../index'
import { AppState } from '../types'

describe('redux store in dev environment', () => {
    let store: Store<AppState>

    beforeEach(() => {
        store = configureStore().store
    })

    it('should has a dispatch method', () => {
        expect(store.dispatch).toBeDefined()
    })

    it('should has a getState method', () => {
        expect(store.getState).toBeDefined()
    })
})
