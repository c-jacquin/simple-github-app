import React, { SFC, Fragment } from 'react'
import {
    List,
    ListItem,
    Left,
    Body,
    Icon,
    Text,
    Right,
    Switch,
} from 'native-base'
import { View, StyleSheet } from 'react-native'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import messages from './messages'
import { PushFormProps } from './types'

const styles = StyleSheet.create({
    child: {
        paddingLeft: 30,
    },
})

const PushForm: SFC<PushFormProps> = ({ intl, data, onChange }) => (
    <List>
        <ListItem icon>
            <Left>
                <Icon name="notifications" />
            </Left>
            <Body>
                <Text>{intl.formatMessage(messages.push)}</Text>
            </Body>
            <Right>
                <Switch
                    value={data.pushEnabled}
                    onValueChange={onChange.bind(null, 'pushEnabled')}
                />
            </Right>
        </ListItem>
        {data.pushEnabled && (
            <View style={styles.child}>
                <ListItem icon>
                    <Left>
                        <Icon name="bug" />
                    </Left>
                    <Body>
                        <Text>{intl.formatMessage(messages.issue)}</Text>
                    </Body>
                    <Right>
                        <Switch
                            value={data.pushIssue}
                            onValueChange={onChange.bind(null, 'pushIssue')}
                        />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name="git-commit" />
                    </Left>
                    <Body>
                        <Text>{intl.formatMessage(messages.commit)}</Text>
                    </Body>
                    <Right>
                        <Switch
                            value={data.pushCommit}
                            onValueChange={onChange.bind(null, 'pushCommit')}
                        />
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name="git-pull-request" />
                    </Left>
                    <Body>
                        <Text>{intl.formatMessage(messages.pullRequest)}</Text>
                    </Body>
                    <Right>
                        <Switch
                            value={data.pushPr}
                            onValueChange={onChange.bind(null, 'pushPr')}
                        />
                    </Right>
                </ListItem>
            </View>
        )}
    </List>
)

export default PushForm
