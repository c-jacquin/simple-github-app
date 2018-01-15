import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'
import { ChildProps } from 'react-apollo'

export interface Viewer {
    viewer: {
        id: string
        avatarUrl: string
        name: string
    }
}

export interface NavigationMenuProps
    extends NavigationMenuActionCreators,
        ChildProps<{}, Viewer> {
    navigation?: any
}

export interface NavigationMenuActionCreators {
    logout: ActionCreator<ReduxAction>
}
