import { ActionCreator } from 'redux'
import { ReduxAction } from 'store/types'
import { ChildProps } from 'react-apollo'

export interface Viewer {
    viewer: {
        id: string
        avatarUrl: string
        name: string
        company: string
        location: string
        followers: {
            totalCount: number
        }
        repositories: {
            edges: Array<{ node: { stargazers: { totalCount: number } } }>
            totalCount: number
        }
    }
}

export interface FormattedViewer {
    profile: {
        id: string
        avatarUrl: string
        name: string
        company: string
        location: string
        followers: number
        totalStars: number
        repositories: number
    }
}

export interface NavigationMenuProps
    extends NavigationMenuActionCreators,
        ChildProps<{}, FormattedViewer> {
    navigation?: any
}

export interface NavigationMenuActionCreators {
    logout: ActionCreator<ReduxAction>
}
