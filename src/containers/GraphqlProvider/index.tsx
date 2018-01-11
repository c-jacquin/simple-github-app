import React, { Component } from 'react'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'

import config from 'config'
import { AppState, ReduxAction } from 'store/types'
import { selectToken } from 'store/auth'
import {
    GraphqlProviderProps,
    GraphqlProviderState,
    GraphqlProviderConnectedProps,
} from './types'

export class GraphqlProvider extends Component<
    GraphqlProviderProps,
    GraphqlProviderState
> {
    client: ApolloClient<NormalizedCacheObject> | undefined

    componentWillReceiveProps({ token }: GraphqlProviderProps) {
        if (typeof this.props.token !== 'string' && typeof token === 'string') {
            this.client = new ApolloClient({
                link: new HttpLink({
                    uri: config.API_ENDPOINT,
                    headers: {
                        authorization: `Bearer ${this.props.token}`,
                    },
                }),
                cache: new InMemoryCache(),
            })
        }
    }

    render() {
        if (this.client instanceof ApolloClient) {
            return (
                <ApolloProvider client={this.client}>
                    {this.props.children}
                </ApolloProvider>
            )
        } else {
            return this.props.children
        }
    }
}

const mapStateToProps: MapStateToProps<
    GraphqlProviderConnectedProps,
    GraphqlProviderProps,
    AppState
> = (state: AppState) => ({
    token: selectToken(state),
})

export default connect<GraphqlProviderConnectedProps, {}, GraphqlProviderProps>(
    mapStateToProps
)(GraphqlProvider)
