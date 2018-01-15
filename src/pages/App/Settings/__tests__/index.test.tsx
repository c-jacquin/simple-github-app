import React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()

import Settings from '../index'

describe('Settings', () => {
    let store = mockStore({})

    beforeEach(() => {
        store = mockStore({})
    })

    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <Settings />
            </Provider>,
        )
        expect(tree).toBeDefined()
    })
})