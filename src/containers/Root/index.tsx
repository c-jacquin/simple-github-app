import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
    StatusBar,
    ScrollView,
    Text,
    Platform,
    View,
    StyleSheet,
} from 'react-native'
import { Notifications, AppLoading } from 'expo'
import { addNavigationHelpers } from 'react-navigation'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { AppState, ReduxAction } from 'store/types'
import { bootstrap, isAppReady } from 'store/boot'
import { selectRootNavigation } from 'store/navigation/root'
import { subscribePush } from 'store/pushNotification'
import Navigator from 'pages'

import {
    RootActionCreators,
    RootConnectedProps,
    RootProps,
    RootState,
} from './types'

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    androidStatusBar: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
})

export class Root extends PureComponent<RootProps, RootState> {
    static contextTypes = {
        store: PropTypes.any,
    }

    componentWillMount() {
        if (this.props.bootstrap) {
            this.props.bootstrap()
        }

        if (this.props.subscribePush) {
            this.props.subscribePush()
        }
    }

    render() {
        const { appReady, nav } = this.props

        if (appReady) {
            return (
                <View style={styles.root}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    {Platform.OS === 'android' && (
                        <View style={styles.androidStatusBar} />
                    )}
                    <Navigator
                        navigation={addNavigationHelpers({
                            dispatch: this.context.store.dispatch,
                            state: nav,
                        })}
                    />
                </View>
            )
        } else {
            return <AppLoading />
        }
    }
}

export const mapStateToProps: MapStateToProps<
    RootConnectedProps,
    RootProps,
    AppState
> = state => ({
    appReady: isAppReady(state),
    nav: selectRootNavigation(state),
})
const mapDispatchToProps: MapDispatchToProps<
    RootActionCreators,
    RootProps
> = dispatch =>
    bindActionCreators(
        {
            bootstrap,
            subscribePush,
        },
        dispatch,
    )

export default connect(mapStateToProps, mapDispatchToProps)(Root)
