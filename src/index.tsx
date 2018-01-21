import Expo, { AppLoading } from 'expo'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from 'store/index'

import LanguageProvider from 'containers/LanguageProvider'
import ThemeProvider from 'containers/ThemeProvider'
import Root from 'containers/Root'

import { translationMessages } from './i18n'

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<AppLoading />} persistor={persistor}>
                    <LanguageProvider messages={translationMessages}>
                        <ThemeProvider>
                            <Root />
                        </ThemeProvider>
                    </LanguageProvider>
                </PersistGate>
            </Provider>
        )
    }
}

Expo.registerRootComponent(App)
