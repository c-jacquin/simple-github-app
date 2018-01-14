import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { AppState, ReduxAction } from 'store/types'
import messages from './messages'
import {
    SettingsProps,
    SettingsState,
    SettingsConnectedProps,
    SettingsActionCreators,
} from './types'

export class Settings extends Component<SettingsProps, SettingsState> {
    render() {
        return (
            <View>
                <Text>Settings</Text>
            </View>
        )
    }
}

const mapStateToProps: MapStateToProps<
    SettingsConnectedProps,
    SettingsProps,
    AppState
> = (state: AppState) => ({})

const mapDispatchToProps: MapDispatchToProps<
    SettingsActionCreators,
    SettingsProps
> = (dispatch: Dispatch<ReduxAction>) => bindActionCreators({}, dispatch)

export default connect<
    SettingsConnectedProps,
    SettingsActionCreators,
    SettingsProps
>(mapStateToProps, mapDispatchToProps)(Settings)
