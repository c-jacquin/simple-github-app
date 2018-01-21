export interface Route {
    routeName: string
    key: string
}

export interface NavigationState {
    index: number
    routes: Route[]
}

export interface FullNavigationState {
    root: NavigationState
    app: NavigationState
}
