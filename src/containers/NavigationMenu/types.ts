import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'

export interface Viewer {
    viewer: {
        id: string
        avatarUrl: string
        name: string
    }
}

export interface NavigationMenuProps extends NavigationMenuActionCreators {
    navigation?: any
}

export interface NavigationMenuActionCreators {
    logout: ActionCreator<ReduxAction>
}
