import React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()

import NavigationMenu from '../index'

describe('NavigationMenu', () => {
    let store = mockStore({})

    beforeEach(() => {
        store = mockStore({})
    })

    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <NavigationMenu />
            </Provider>
        )
        expect(tree).toBeDefined()
    })
})
