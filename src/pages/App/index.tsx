import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { NavigationActions } from 'react-navigation'
import { ApolloProvider } from 'react-apollo'
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from 'apollo-client-preset'
import { ReduxCache } from 'apollo-cache-redux'

import config from 'config'
import { AppState, ReduxAction } from 'store/types'
import { selectToken, auth } from 'store/auth'
import Navigator from './App.nav'
import messages from './messages'
import { AppProps, AppConnectedProps, AppActionCreators } from './types'

export class App extends Component<AppProps, {}> {
    static contextTypes = {
        store: PropTypes.object,
    }

    client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        link: new HttpLink({
            uri: config.API_ENDPOINT,
            headers: {
                Authorization: `bearer ${this.props.token}`,
            },
        }),
        cache: new ReduxCache({
            store: this.context.store,
        }),
    })

    componentWillMount() {
        if (!this.props.token && this.props.goTo) {
            this.props.goTo({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Auth' })],
            })
        }
    }

    render() {
        return (
            <ApolloProvider client={this.client}>
                <Navigator />
            </ApolloProvider>
        )
    }
}

const mapStateToProps: MapStateToProps<
    AppConnectedProps,
    AppProps,
    AppState
> = state => ({
    token: selectToken(state),
})

const mapDispatchToProps: MapDispatchToProps<AppActionCreators, AppProps> = (
    dispatch: Dispatch<ReduxAction>
) =>
    bindActionCreators(
        {
            goTo: NavigationActions.reset,
            auth,
        },
        dispatch
    )

export default connect(mapStateToProps, mapDispatchToProps)(App)
