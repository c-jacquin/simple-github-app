import React, { SFC } from 'react'
import {
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    Button,
} from 'react-native'
import { DrawerItems } from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { bindActionCreators } from 'redux'

import { AppState, ReduxAction } from 'store/types'
import * as authActions from 'store/auth'
import messages from './messages'
import { NavigationMenuProps, NavigationMenuActionCreators } from './types'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export const NavigationMenu: SFC<NavigationMenuProps> = ({
    logout,
    ...otherProps
}) => (
    <ScrollView>
        <SafeAreaView style={styles.container}>
            <Button title={'logout'} onPress={logout} />
            <Text>{JSON.stringify(otherProps)}</Text>
            <DrawerItems {...otherProps} />
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
