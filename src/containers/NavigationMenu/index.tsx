import React, { SFC, Fragment } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {
    Container,
    Content,
    Header,
    Button,
    Thumbnail,
    Icon,
    Text,
} from 'native-base'

import { persistor } from 'store'
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
    header: {
        height: 150,
        flexDirection: 'column',
    },
})

const VIEWER_QUERY = gql`
    {
        viewer {
            id
            name
            avatarUrl
            company
            location
            login
            followers {
                totalCount
            }
            repositories(
                last: 100
                orderBy: { field: STARGAZERS, direction: DESC }
            ) {
                totalCount
                edges {
                    node {
                        stargazers {
                            totalCount
                        }
                    }
                }
            }
        }
    }
`

export const NavigationMenu: SFC<NavigationMenuProps & InjectedIntlProps> = ({
    logout,
    data,
    intl,
    ...otherProps
}) => (
    <Container>
        <ScrollView>
            {data &&
                data.profile && (
                    <SafeAreaView style={styles.safe}>
                        <Header style={styles.header}>
                            <Thumbnail
                                size={50}
                                source={{ uri: data.profile.avatarUrl }}
                            />
                            <Text>{data.profile.name}</Text>
                        </Header>
                        <Content>
                            <Button transparent iconLeft onPress={logout}>
                                <Icon name="log-out" />
                                <Text>
                                    {intl.formatMessage(messages.logout)}
                                </Text>
                            </Button>
                            <DrawerItems {...otherProps} />
                        </Content>
                    </SafeAreaView>
                )}
        </ScrollView>
    </Container>
)

const mapDispatchToProps: MapDispatchToProps<
    NavigationMenuActionCreators,
    NavigationMenuProps
> = dispatch => ({
    ...bindActionCreators({}, dispatch),
    logout: async () => {
        await persistor.purge()
        dispatch(authActions.logout())
    },
})

export const ConnectedMenu = injectIntl<NavigationMenuProps>(
    connect(null, mapDispatchToProps)(NavigationMenu),
)

export default graphql<Viewer, {}, NavigationMenuProps>(VIEWER_QUERY, {
    props: ({ data }) => {
        return data && data.viewer
            ? {
                  data: {
                      ...data,
                      viewer: undefined,
                      profile: {
                          ...data.viewer,
                          followers: data.viewer.followers.totalCount,
                          repositories: data.viewer.repositories.totalCount,
                          totalStars: data.viewer.repositories.edges.reduce(
                              (total, { node }) => {
                                  return total + node.stargazers.totalCount
                              },
                              0,
                          ),
                      },
                  },
              }
            : { data }
    },
})(ConnectedMenu)
