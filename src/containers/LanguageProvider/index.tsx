import React, { Component, StatelessComponent } from 'react'
import { IntlProvider } from 'react-intl'
import {
    connect,
    MapStateToProps,
    MapDispatchToProps,
    Dispatch,
} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as languageStore from 'store/language'
import { AppState, ReduxAction } from 'store/types'

import config from 'config'

import { LanguageConnectedProps, LanguageProps } from './types'

export class LanguageProvider extends React.PureComponent<LanguageProps> {
    render() {
        const { locale = config.LANGUAGE.DEFAULT_LOCALE, messages } = this.props

        return (
            <IntlProvider
                locale={locale}
                key={locale}
                messages={messages[locale]}
            >
                {this.props.children}
            </IntlProvider>
        )
    }
}

export const mapStateToProps: MapStateToProps<
    LanguageConnectedProps,
    LanguageProps,
    AppState
> = state => ({
    locale: languageStore.selectLocale(state),
})

export default connect(mapStateToProps)(LanguageProvider)
