import React, { SFC } from 'react'
import { StyleSheet } from 'react-native'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import {
    Container,
    Content,
    Header,
    Body,
    Text,
    List,
    ListItem,
    Switch,
    Left,
    Right,
    Icon,
    Picker,
} from 'native-base'

import { AppState, ReduxAction } from 'store/types'
import { selectTheme, setTheme } from 'store/settings'
import { selectLocale, setLocale } from 'store/language'
import config from 'config'
import { themes } from 'themes'
import messages from './messages'
import {
    SettingsProps,
    SettingsConnectedProps,
    SettingsActionCreators,
} from './types'

const Item = Picker.Item

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
})

export const Settings: SFC<SettingsProps & InjectedIntlProps> = ({
    intl,
    theme,
    locale,
    changeTheme,
    changeLocale,
}) => (
    <Container>
        <Header>
            <Body>
                <Text>{intl.formatMessage(messages.title)}</Text>
            </Body>
        </Header>
        <Content>
            <List style={styles.list}>
                <ListItem icon>
                    <Left>
                        <Icon name="color-palette" />
                    </Left>
                    <Body>
                        <Text>{intl.formatMessage(messages.theme)}</Text>
                    </Body>
                    <Right>
                        <Picker
                            iosHeader={intl.formatMessage(messages.theme)}
                            mode="dialog"
                            selectedValue={theme}
                            onValueChange={changeTheme}
                        >
                            {Object.keys(themes).map((name, index) => (
                                <Item label={name} value={name} key={index} />
                            ))}
                        </Picker>
                    </Right>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Icon name="globe" />
                    </Left>
                    <Body>
                        <Text>{intl.formatMessage(messages.language)}</Text>
                    </Body>
                    <Right>
                        <Picker
                            iosHeader={intl.formatMessage(messages.language)}
                            mode="dialog"
                            selectedValue={locale}
                            onValueChange={changeLocale}
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
        </Content>
    </Container>
)

const mapStateToProps: MapStateToProps<
    SettingsConnectedProps,
    SettingsProps,
    AppState
> = (state: AppState) => ({
    theme: selectTheme(state),
    locale: selectLocale(state),
})

const mapDispatchToProps: MapDispatchToProps<
    SettingsActionCreators,
    SettingsProps
> = (dispatch: Dispatch<ReduxAction>) =>
    bindActionCreators(
        {
            changeLocale: setLocale,
            changeTheme: setTheme,
        },
        dispatch,
    )

export default injectIntl(
    connect(mapStateToProps, mapDispatchToProps)(Settings),
)
