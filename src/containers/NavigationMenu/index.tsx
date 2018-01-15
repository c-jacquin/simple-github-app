import React, { SFC, Fragment } from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Button } from 'react-native'
import { DrawerItems } from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { bindActionCreators } from 'redux'
import { Text, View } from 'glamorous-native'
import { Grid, Row, Col } from 'react-native-easy-grid'

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

const VIEWER_QUERY = gql`
    {
        viewer {
            id
            name
            avatarUrl
            company
            location
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

export const NavigationMenu: SFC<NavigationMenuProps> = ({
    logout,
    data,
    ...otherProps
}) => (
    <ScrollView>
        {data &&
            data.profile && (
                <SafeAreaView style={styles.safe}>
                    <Grid>
                        <Row>
                            <Avatar
                                source={{ uri: data.profile.avatarUrl }}
                                rounded={true}
                            />
                        </Row>
                        <Row>
                            <Text textAlign={'center'}>
                                {data.profile.name}
                            </Text>
                        </Row>
                        <Row>
                            <Col>
                                <Text textAlign={'center'}>
                                    {data.profile.repositories}
                                </Text>
                            </Col>
                            <Col>
                                <Text textAlign={'center'}>
                                    {data.profile.totalStars}
                                </Text>
                            </Col>
                            <Col>
                                <Text textAlign={'center'}>
                                    {data.profile.followers}
                                </Text>
                            </Col>
                        </Row>
                    </Grid>
                    <DrawerItems {...otherProps} />
                    <Button title={'logout'} onPress={logout} />
                </SafeAreaView>
            )}
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
        dispatch,
    )

export const ConnectedMenu = connect(null, mapDispatchToProps)(NavigationMenu)

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
