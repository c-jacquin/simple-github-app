import React, { SFC, Fragment } from 'react'
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    Button,
    View,
} from 'react-native'
import { DrawerItems } from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'
import { graphql, ChildProps } from 'react-apollo'
import gql from 'graphql-tag'
import { bindActionCreators } from 'redux'

import Avatar from 'components/Avatar'

import { AppState, ReduxAction } from 'store/types'
import * as authActions from 'store/auth'
import messages from './messages'
import {
    NavigationMenuProps,
    NavigationMenuActionCreators,
    Viewer,
} from './types'

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
})

export const NavigationMenu: SFC<
    NavigationMenuProps & ChildProps<{}, Viewer>
> = ({ logout, data, ...otherprops }) => (
    <ScrollView>
        <SafeAreaView style={styles.safe}>
            {data &&
                data.viewer && (
                    <Avatar
                        source={data.viewer.avatarUrl}
                        title={data.viewer.name}
                        rounded={true}
                    />
                )}
            <Button title={'logout'} onPress={logout} />
            <DrawerItems {...otherprops} />
        </SafeAreaView>
    </ScrollView>
)

const mapDispatchToProps: MapDispatchToProps<
    NavigationMenuActionCreators,
    NavigationMenuProps
> = dispatch =>
    bindActionCreators(
        {
            logout: authActions.logout,
        },
        dispatch
    )

export const ConnectedMenu = connect(null, mapDispatchToProps)(NavigationMenu)

export default graphql(gql`
    query getUserInfo {
        viewer {
            id
            name
            avatarUrl
            company
        }
    }
`)(ConnectedMenu)
