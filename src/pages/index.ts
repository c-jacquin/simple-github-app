import { StackNavigator } from 'react-navigation'

import Auth from 'pages/Auth'
import App from 'pages/App'
// Import pages here

export default StackNavigator(
    {
        Auth: {
            screen: Auth,
        },
        App: {
            screen: App,
        },
        // Insert pages here
    },
    {
        headerMode: 'none',
        initialRouteName: 'App',
    }
)
