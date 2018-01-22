import Expo, { AppLoading } from 'expo'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from 'store/index'

import Root from 'containers/Root'

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={<AppLoading />} persistor={persistor}>
                    <Root />
                </PersistGate>
            </Provider>
        )
    }
}

Expo.registerRootComponent(App)
