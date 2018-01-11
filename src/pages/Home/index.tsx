import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { NavigationActions } from 'react-navigation'

import { AppState, ReduxAction } from 'store/types'
import { selectToken, auth } from 'store/auth'
// import Navigator from './Home.nav'
import messages from './messages'
import {
    HomeProps,
    HomeState,
    HomeConnectedProps,
    HomeActionCreators,
} from './types'

export class Home extends Component<HomeProps, HomeState> {
    componentWillMount() {
        if (!this.props.token) {
            this.props.goTo({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Auth' })],
            })
        }
    }

    render() {
        return (
            <View>
                <Text>HOME</Text>
            </View>
        )
    }
}

const mapStateToProps: MapStateToProps<
    HomeConnectedProps,
    HomeProps,
    AppState
> = state => ({
    token: selectToken(state),
})

const mapDispatchToProps: MapDispatchToProps<HomeActionCreators, HomeProps> = (
    dispatch: Dispatch<ReduxAction>
) =>
    bindActionCreators(
        {
            goTo: NavigationActions.reset,
            auth,
        },
        dispatch
    )

export default connect<HomeConnectedProps, HomeActionCreators, HomeProps>(
    mapStateToProps,
    mapDispatchToProps
)(Home)
