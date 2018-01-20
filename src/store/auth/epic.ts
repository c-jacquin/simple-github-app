import { combineEpics } from 'redux-observable'
import { switchMap, flatMap, map, catchError, tap } from 'rxjs/operators'
import { of as observableOf } from 'rxjs/observable/of'
import { NavigationActions } from 'react-navigation'
import { MyEpic } from '../types'
import * as authActions from './actions'

export const authEpic: MyEpic = (action$, store, { authApi }) => {
    return action$.ofType(authActions.AUTH_PENDING).pipe(
        switchMap(authApi.login),
        switchMap(authApi.getToken),
        flatMap(data => [
            authActions.authSuccess(data),
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'App' })],
            }),
        ]),
        catchError(observableOf),
    )
}

export const logoutEpic: MyEpic = action$ => {
    return action$.ofType(authActions.LOGOUT).pipe(
        flatMap(() => [
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Auth' })],
            }),
            authActions.logoutSuccess(),
        ]),
    )
}

export default combineEpics(authEpic, logoutEpic)
