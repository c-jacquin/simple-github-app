import React from 'react'
import { DrawerNavigator, DrawerNavigatorConfig } from 'react-navigation'
import NavigationMenu from 'containers/NavigationMenu'

import Settings from './Settings'
// Import pages here

export default DrawerNavigator(
    {
        Settings: {
            screen: Settings,
        },
        // Insert pages here
    },
    {
        contentComponent: props => <NavigationMenu {...props} />,
    },
)
