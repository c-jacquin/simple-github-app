import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import { injectIntl } from 'react-intl'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import {
    Container,
    Content,
    Header,
    Body,
    Button,
    Text,
    List,
    ListItem,
    Switch,
    Left,
    Right,
    Icon,
    Picker,
} from 'native-base'
import autobind from 'autobind-decorator'

import PushForm from 'components/PushForm'
import { AppState, ReduxAction } from 'store/types'
import {
    selectTheme,
    selectPushSettings,
    setTheme,
    updatePushSettings,
} from 'store/settings'
import { selectLocale, setLocale } from 'store/language'
import config from 'config'
import { themes } from 'themes'
import messages from './messages'
import {
    SettingsProps,
    SettingsConnectedProps,
    SettingsActionCreators,
    SettingsState,
} from './types'

const Item = Picker.Item

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
})

const mapStateToProps: MapStateToProps<
    SettingsConnectedProps,
    SettingsProps,
    AppState
> = (state: AppState) => ({
    theme: selectTheme(state),
    locale: selectLocale(state),
    pushSettings: selectPushSettings(state),
})

const mapDispatchToProps: MapDispatchToProps<
    SettingsActionCreators,
    SettingsProps
> = (dispatch: Dispatch<ReduxAction>) =>
    bindActionCreators(
        {
            setLocale,
            setTheme,
            updatePushSettings,
        },
        dispatch,
    )

export class Settings extends PureComponent<SettingsProps, SettingsState> {
    state = {
        pushChanged: false,
        pushSettings: this.props.pushSettings,
    }

    @autobind
    handlePushFormChange(key: string, value: string) {
        this.setState({
            pushChanged: true,
            pushSettings: {
                ...this.state.pushSettings,
                [key]: value,
            },
        })
    }

    @autobind
    handleSubmitForms() {
        if (this.state.pushChanged) {
            this.props.updatePushSettings(this.state.pushSettings)
        }
    }

    render() {
        const { intl, theme, locale } = this.props

        return (
            <Container>
                <Header>
                    <Body>
                        <Text>{intl.formatMessage(messages.title)}</Text>
                    </Body>
                    {this.state.pushChanged && (
                        <Right>
                            <Button
                                transparent
                                onPress={this.handleSubmitForms}
                            >
                                <Icon name="cloud-upload" />
                            </Button>
                        </Right>
                    )}
                </Header>
                <Content>
                    <List style={styles.list}>
                        <ListItem icon>
                            <Left>
                                <Icon name="color-palette" />
                            </Left>
                            <Body>
                                <Text>
                                    {intl.formatMessage(messages.theme)}
                                </Text>
                            </Body>
                            <Right>
                                <Picker
                                    iosHeader={intl.formatMessage(
                                        messages.theme,
                                    )}
                                    mode="dialog"
                                    selectedValue={theme}
                                    onValueChange={this.props.setTheme}
                                >
                                    {Object.keys(themes).map((name, index) => (
                                        <Item
                                            label={name}
                                            value={name}
                                            key={index}
                                        />
                                    ))}
                                </Picker>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="globe" />
                            </Left>
                            <Body>
                                <Text>
                                    {intl.formatMessage(messages.language)}
                                </Text>
                            </Body>
                            <Right>
                                <Picker
                                    iosHeader={intl.formatMessage(
                                        messages.language,
                                    )}
                                    mode="dialog"
                                    selectedValue={locale}
                                    onValueChange={this.props.setLocale}
                                >
                                    {config.LANGUAGE.SUPPORTED_LOCALES.map(
                                        (name, index) => (
                                            <Item
                                                label={intl.formatMessage(
                                                    messages[name],
                                                )}
                                                value={name}
                                                key={index}
                                            />
                                        ),
                                    )}
                                </Picker>
                            </Right>
                        </ListItem>
                    </List>
                    <PushForm
                        intl={intl}
                        data={this.state.pushSettings}
                        onChange={this.handlePushFormChange}
                    />
                </Content>
            </Container>
        )
    }
}

export default injectIntl(
    connect(mapStateToProps, mapDispatchToProps)(Settings),
)
