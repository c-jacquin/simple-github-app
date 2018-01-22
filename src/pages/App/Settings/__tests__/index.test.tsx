import React from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import initialState from '../../../../store/initialState'
import Settings from '../index'

const mockStore = configureStore()

describe('Settings', () => {
    let store = mockStore(initialState)
    const changeTheme = () => {}
    const changeLocale = () => {}

    beforeEach(() => {
        store = mockStore(initialState)
    })

    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <IntlProvider locale="en" messages={{}}>
                    <Settings
                        theme="test"
                        locale="test"
                        changeTheme={changeTheme}
                        changeLocale={changeLocale}
                    />
                </IntlProvider>
            </Provider>,
        )
        expect(tree).toBeDefined()
    })
})
