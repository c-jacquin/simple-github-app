import React, { SFC } from 'react'
import { View } from 'react-native'
import { StyleProvider } from 'native-base'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { AppState, ReduxAction } from 'store/types'
import { selectTheme } from 'store/settings'
import { ThemeProviderProps, ThemeProviderConnectedProps } from './types'
import { getTheme, themes } from 'themes'
import config from 'config'

const ThemeProvider: SFC<ThemeProviderProps> = ({
    theme = config.DEFAULT_THEME,
    children,
}) => <StyleProvider style={getTheme(themes[theme])}>{children}</StyleProvider>

const mapStateToProps: MapStateToProps<
    ThemeProviderConnectedProps,
    ThemeProviderProps,
    AppState
> = state => ({
    theme: selectTheme(state),
})

export default connect(mapStateToProps)(ThemeProvider)
