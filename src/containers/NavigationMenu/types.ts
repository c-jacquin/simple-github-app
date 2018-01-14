import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'

export interface NavigationMenuProps extends NavigationMenuActionCreators {}

export interface NavigationMenuActionCreators {
    logout: ActionCreator<ReduxAction>
}
