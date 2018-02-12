import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { IntlProvider } from 'react-intl'
import { translationMessages } from '../../../i18n'

const mockStore = configureStore()

import PushForm from '../index'

describe('PushForm', () => {
    let store = mockStore({})
    const settingsPushData = {
        pushEnabled: true,
        pushCommit: true,
        pushIssue: true,
        pushPr: true,
    }
    const { intl } = new IntlProvider(
        { locale: 'en', messages: translationMessages },
        {},
    ).getChildContext()

    const changeHandler = jest.fn()

    beforeEach(() => {
        store = mockStore({})
    })

    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <PushForm
                    data={settingsPushData}
                    intl={intl}
                    onChange={changeHandler}
                />
            </Provider>,
        )
        expect(tree).toBeDefined()
    })
})
