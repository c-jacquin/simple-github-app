import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import * as authActions from 'store/auth/actions'
import { AppState, ReduxAction } from 'store/types'
import messages from './messages'
import {
    AuthProps,
    AuthState,
    AuthConnectedProps,
    AuthActionCreators,
} from './types'

export class Auth extends Component<AuthProps, AuthState> {
    render() {
        return (
            <View>
                <Button title="Open Github Auth" onPress={this.props.login} />
            </View>
        )
    }
}

const mapStateToProps: MapStateToProps<
    AuthConnectedProps,
    AuthProps,
    AppState
> = state => ({})

const mapDispatchToProps: MapDispatchToProps<AuthActionCreators, AuthProps> = (
    dispatch: Dispatch<ReduxAction>,
) =>
    bindActionCreators(
        {
            login: authActions.auth,
        },
        dispatch,
    )

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
