import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import initialState from '../../../store/initialState'
import ThemeProvider from '../index'

const mockStore = configureStore()

describe('ThemeProvider', () => {
    let store = mockStore(initialState)

    beforeEach(() => {
        store = mockStore(initialState)
    })

    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <ThemeProvider>
                    <View />
                </ThemeProvider>
            </Provider>,
        )
        expect(tree).toBeDefined()
    })
})
