import { StackNavigator } from 'react-navigation'

import Auth from 'pages/Auth'
import Home from 'pages/Home'
// Import pages here

export default StackNavigator(
    {
        Auth: {
            screen: Auth,
        },
        Home: {
            screen: Home,
        },
        // Insert pages here
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home',
    }
)
